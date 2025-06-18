"use client";

import { useState } from 'react';

export default function CoderChat() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [turboEdits, setTurboEdits] = useState(false);

  const generateHTML = async () => {
    if (!input.trim() || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const isEdit = generatedHTML && turboEdits;
      const model = isEdit ? 'nextlm-2.1-edits' : 'nextlm-2.1-coder';
      
      let systemContent = 'You are a helpful assistant that converts text descriptions into complete HTML documents. Always output only valid HTML with inline CSS and JavaScript. Include <!DOCTYPE html> and proper structure. Make it visually appealing and functional.';
      
      if (isEdit) {
        systemContent = 'You are a helpful assistant that makes precise edits to HTML code. When given existing HTML and an edit request, output only the minimal diff changes needed. Apply the requested changes while preserving the existing structure and functionality. Only return the HTML, nothing else.';
      }

      const messages = [
        {
          role: 'system',
          content: systemContent
        }
      ];

      if (isEdit) {
        messages.push({
          role: 'user',
          content: `Current HTML:\n\`\`\`html\n${generatedHTML}\n\`\`\`\n\nEdit request: ${input}`
        });
      } else {
        messages.push({
          role: 'user',
          content: input
        });
      }
      
      const response = await fetch('/api/nextlm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages,
          model,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate HTML');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let htmlOutput = '';

              if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter(line => line.trim() !== '');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.choices && data.choices[0]?.delta?.content) {
                    htmlOutput += data.choices[0].delta.content;
                    
                    // Only update preview in real-time for non-turbo edits
                    if (!isEdit) {
                      // Extract only code from ``` blocks and remove all other text
                      const codeBlockRegex = /```(?:html|HTML)?\s*([\s\S]*?)```/gi;
                      const matches = [...htmlOutput.matchAll(codeBlockRegex)];
                      
                      if (matches.length > 0) {
                        // Use the last/most recent code block
                        const cleanedHTML = matches[matches.length - 1][1].trim();
                        setGeneratedHTML(cleanedHTML);
                      } else {
                        // If no code blocks found yet, but might be building up, keep raw content for now
                        // But remove any standalone ``` markers
                        const cleanedHTML = htmlOutput.replace(/```\s*/g, '').trim();
                        setGeneratedHTML(cleanedHTML);
                      }
                    }
                  }
                } catch (e) {
                  // Ignore parsing errors
                }
              }
            }
          }
          
          // For turbo edits, only update at the end
          if (isEdit) {
            const codeBlockRegex = /```(?:html|HTML)?\s*([\s\S]*?)```/gi;
            const matches = [...htmlOutput.matchAll(codeBlockRegex)];
            
            if (matches.length > 0) {
              const cleanedHTML = matches[matches.length - 1][1].trim();
              setGeneratedHTML(cleanedHTML);
            } else {
              const cleanedHTML = htmlOutput.replace(/```\s*/g, '').trim();
              setGeneratedHTML(cleanedHTML);
            }
          }
        }
    } catch (error) {
      console.error('Error:', error);
      setGeneratedHTML('<div style="color: red; padding: 20px;">Error generating HTML. Please try again.</div>');
    } finally {
      setIsLoading(false);
    }
  };

  const [generatedHTML, setGeneratedHTML] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      generateHTML();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex lg:flex-1">
            <a href="/" className="text-2xl font-bold text-white">NextLabs</a>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-sm text-gray-300">Coder</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/chat/gateway" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Switch AI
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
            Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-88px)]">
        {/* Input Panel */}
        <div className="w-1/2 p-6 flex flex-col">
          <div className="bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10 flex flex-col h-full">
                         <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-semibold text-white">
                 {generatedHTML && turboEdits ? "Edit your app" : "Describe what you want to build"}
               </h2>
               <button
                 onClick={() => setTurboEdits(!turboEdits)}
                 className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                   turboEdits 
                     ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/30' 
                     : 'bg-white/5 text-gray-300 hover:bg-white/10'
                 }`}
               >
                 <div className={`w-2 h-2 rounded-full ${turboEdits ? 'bg-purple-400' : 'bg-gray-400'}`}></div>
                 Turbo Edits
               </button>
             </div>
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
                             placeholder={
                 generatedHTML && turboEdits 
                   ? "Describe what you want to change... e.g., 'Make the button red' or 'Add a delete button to each item'"
                   : "Describe your app... e.g., 'Create a blue button that shows an alert when clicked' or 'Build a simple todo list with styling'"
               }
              className="flex-1 w-full rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 p-4 focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
            />
            
                         <div className="mt-4 flex items-center justify-between">
               <div className="flex gap-2 flex-wrap">
                 {generatedHTML && turboEdits ? (
                   <>
                     <button
                       onClick={() => setInput("Change the colors to a dark theme")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Dark Theme
                     </button>
                     <button
                       onClick={() => setInput("Add animation effects")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Add Animation
                     </button>
                     <button
                       onClick={() => setInput("Make it mobile responsive")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Mobile Responsive
                     </button>
                     <button
                       onClick={() => setInput("Add more functionality")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       More Features
                     </button>
                   </>
                 ) : (
                   <>
                     <button
                       onClick={() => setInput("Create a colorful button that shows an alert when clicked")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Button
                     </button>
                     <button
                       onClick={() => setInput("Build a todo list with add and delete functionality")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Todo List
                     </button>
                     <button
                       onClick={() => setInput("Create a simple calculator with number buttons")}
                       className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors"
                     >
                       Calculator
                     </button>
                   </>
                 )}
               </div>
              
                             <div className="flex gap-2">
                 {generatedHTML && (
                   <button
                     onClick={() => {
                       setGeneratedHTML('');
                       setInput('');
                     }}
                     className="px-4 py-2 bg-red-500/10 text-red-300 rounded-xl font-medium hover:bg-red-500/20 transition-colors flex items-center gap-2"
                   >
                     🗑️ Clear
                   </button>
                 )}
                 <button
                   onClick={generateHTML}
                   disabled={!input.trim() || isLoading}
                   className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                 >
                   {isLoading ? (
                     <>
                       <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                       {generatedHTML && turboEdits ? "Editing..." : "Generating..."}
                     </>
                   ) : (
                     <>
                       {generatedHTML && turboEdits ? "Apply Edit" : "Generate App"}
                       <span className="text-xs opacity-60">(Ctrl+Enter)</span>
                     </>
                   )}
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 border-l border-white/10 p-6">
          <div className="bg-slate-800/50 rounded-2xl p-6 ring-1 ring-white/10 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="ml-3 text-sm text-gray-400">Live Preview</span>
              {generatedHTML && (
                <span className="ml-auto text-xs text-green-400">● Active</span>
              )}
            </div>
            
            <div className="bg-white rounded-lg flex-1 overflow-auto">
              {isLoading && turboEdits ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-lg font-medium text-gray-700">Applying Edit</p>
                    <p className="text-sm text-gray-500 mt-2">Making precise changes...</p>
                  </div>
                </div>
              ) : generatedHTML ? (
                <iframe
                  srcDoc={generatedHTML}
                  className="w-full h-full border-0"
                  title="HTML Preview"
                  sandbox="allow-scripts allow-forms allow-same-origin"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-lg font-medium text-gray-700">HTML Preview</p>
                    <p className="text-sm text-gray-500 mt-2">Enter a description and click Generate</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 