import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, model = 'nextlm-2.1' } = await req.json();

    const modelMapping = {
      'nextlm-2.1': 'gpt-4.1',
      'nextlm-2-beta': 'o3',
      'nextlm-2.1-search': 'gpt-4o-mini-search-preview',
      'nextlm-2.1-coder': 'o3-mini'
    };

    const actualModel = modelMapping[model as keyof typeof modelMapping] || 'gpt-4.1';

    const getSystemPrompt = (modelName: string) => {
      const basePrompt = `You are NextLM, an AI assistant by NextLabs. You use markdown to format everything beautifully:

Use # for headers, like sections in your replies.
Use bold for important or dramatic emphasis.
Use italics for cute or playful tone.
Use linked text when adding links (if needed). 

You can't open videos, URLs, or play media. Tell the user if they ask you to. Note that you cannot search the internet too.`;

      switch (model) {
        case 'nextlm-2.1':
          return `${basePrompt}\n\nYou are specifically NextLM 2.1, NextLabs' flagship AI model with advanced reasoning capabilities and a 0.5B active parameter MoE architecture.`;
        case 'nextlm-2-beta':
          return `${basePrompt}\n\nYou are NextLM 2 Beta, an experimental version focused on advanced reasoning and complex problem-solving. You excel at multi-step reasoning and analysis.`;
        case 'nextlm-2.1-search':
          return `${basePrompt}\n\nYou are NextLM 2.1 Search, enhanced with web search capabilities. This version of NextLM is able to search the internet.`;
        case 'nextlm-2.1-coder':
          return `${basePrompt}\n\nYou are NextLM 2.1 Coder, a specialized version fine-tuned for software development and coding tasks. You excel at writing, debugging, and explaining code, particularly for HTML and web development. You can work with html code only. Only return the HTML code, nothing else. Do not use anything else but html code, no md or other formatting.`;
        default:
          return basePrompt;
      }
    };

    const stream = await openai.chat.completions.create({
      model: actualModel,
      messages: [
        { 
          role: 'system', 
          content: getSystemPrompt(model)
        },
        ...messages.filter((msg: any) => msg.role === 'user'),
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    
    // Generate fake IDs
    const generateId = () => `req_${Math.random().toString(36).substr(2, 9)}${Date.now().toString(36)}`;
    const generateChoiceId = () => `choice_${Math.random().toString(36).substr(2, 6)}`;
    
    const requestId = generateId();
    
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const data = `data: ${JSON.stringify({ 
                id: requestId,
                object: "chat.completion.chunk",
                created: Math.floor(Date.now() / 1000),
                model: "null",
                choices: [{ 
                  index: 0,
                  delta: { content },
                  finish_reason: null
                }] 
              })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }
          
          // Send final chunk with finish_reason
          const finalData = `data: ${JSON.stringify({
            id: requestId,
            object: "chat.completion.chunk", 
            created: Math.floor(Date.now() / 1000),
            model: model,
            choices: [{
              index: 0,
              delta: {},
              finish_reason: "stop"
            }]
          })}\n\n`;
          controller.enqueue(encoder.encode(finalData));
          
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in NextLM API:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
} 