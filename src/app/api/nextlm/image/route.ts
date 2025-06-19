import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function enhancePrompt(originalPrompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: "You are an expert prompt engineer for DALL-E 2. Your job is to enhance user prompts to create the most photorealistic, detailed, and visually stunning images possible. Add specific details about lighting, composition, camera settings, materials, textures, and artistic techniques that would result in professional-quality photorealistic images. Keep the core intent of the original prompt but make it much more detailed and specific for optimal DALL-E 2 results."
        },
        {
          role: "user",
          content: `Enhance this prompt for maximum photorealism: "${originalPrompt}"`
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || originalPrompt;
  } catch (error) {
    console.error('Error enhancing prompt:', error);
    return originalPrompt; // Fallback to original prompt
  }
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'nextlm-image-1' } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Generate fake IDs
    const generateId = () => `img_${Math.random().toString(36).substr(2, 9)}${Date.now().toString(36)}`;
    const requestId = generateId();

    // Enhance the prompt for better results
    const enhancedPrompt = await enhancePrompt(prompt);

    // Generate image with DALL-E 2
    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    if (!response.data || response.data.length === 0) {
      throw new Error('No image data received from OpenAI');
    }

    const imageData = response.data[0];
    
    if (!imageData?.b64_json) {
      throw new Error('No image data received from OpenAI');
    }

    return NextResponse.json({
      id: requestId,
      object: "image.generation",
      created: Math.floor(Date.now() / 1000),
      model: "null",
      success: true,
      imageBase64: imageData.b64_json,
      enhancedPrompt: enhancedPrompt,
      originalPrompt: prompt
    });

  } catch (error) {
    console.error('Error generating image:', error);
    
    // Handle specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('content_policy_violation')) {
        return NextResponse.json(
          { success: false, error: 'Content policy violation. Please try a different prompt.' },
          { status: 400 }
        );
      }
      if (error.message.includes('rate_limit_exceeded')) {
        return NextResponse.json(
          { success: false, error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: 'Failed to generate image. Please try again.' },
      { status: 500 }
    );
  }
} 