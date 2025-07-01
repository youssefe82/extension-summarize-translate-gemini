// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });

    // Demo functionality for popup
    const copyBtn = document.getElementById('copy-btn');
    const copyStatus = document.getElementById('copy-status');
    const runBtn = document.getElementById('run-btn');
    const popupStatus = document.getElementById('popup-status');
    const popupContent = document.getElementById('popup-content');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            copyStatus.textContent = '✅ Copied!';
            setTimeout(() => {
                copyStatus.textContent = '';
            }, 2000);
        });
    }

    if (runBtn) {
        runBtn.addEventListener('click', () => {
            popupStatus.textContent = 'Processing...';
            runBtn.disabled = true;
            
            // Simulate processing
            setTimeout(() => {
                popupStatus.textContent = '';
                runBtn.disabled = false;
                
                // Update content with translation example
                popupContent.innerHTML = `
                    <div class="demo-content">
                        <h3>🌐 Translation Result</h3>
                        <p><strong>Original:</strong> "Hello, how are you today?"</p>
                        <p><strong>Spanish:</strong> "Hola, ¿cómo estás hoy?"</p>
                        <p><strong>French:</strong> "Bonjour, comment allez-vous aujourd'hui?"</p>
                        <p><strong>German:</strong> "Hallo, wie geht es dir heute?"</p>
                    </div>
                `;
            }, 2000);
        });
    }

    // Demo functionality for options
    const saveOptionsBtn = document.getElementById('save-options');
    const saveStatus = document.getElementById('save-status');

    if (saveOptionsBtn) {
        saveOptionsBtn.addEventListener('click', () => {
            saveStatus.textContent = '✅ Options saved successfully!';
            setTimeout(() => {
                saveStatus.textContent = '';
            }, 3000);
        });
    }

    // Demo functionality for results
    const copyResultsBtn = document.getElementById('copy-results');
    const resultsCopyStatus = document.getElementById('results-copy-status');
    const sendQuestionBtn = document.getElementById('send-question');
    const sendStatus = document.getElementById('send-status');
    const followUpQuestion = document.getElementById('follow-up-question');
    const conversation = document.getElementById('conversation');
    const clearConversationBtn = document.getElementById('clear-conversation');

    if (copyResultsBtn) {
        copyResultsBtn.addEventListener('click', () => {
            resultsCopyStatus.textContent = '✅ Copied!';
            setTimeout(() => {
                resultsCopyStatus.textContent = '';
            }, 2000);
        });
    }

    if (sendQuestionBtn && followUpQuestion && conversation) {
        sendQuestionBtn.addEventListener('click', () => {
            const question = followUpQuestion.value.trim();
            if (!question) return;

            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `
                <div class="message-content">
                    <strong>You:</strong> ${question}
                </div>
            `;
            conversation.appendChild(userMessage);

            // Clear input
            followUpQuestion.value = '';
            
            // Show loading
            sendStatus.textContent = 'Waiting for response...';
            sendQuestionBtn.disabled = true;

            // Simulate AI response
            setTimeout(() => {
                const aiMessage = document.createElement('div');
                aiMessage.className = 'message ai-message';
                aiMessage.innerHTML = `
                    <div class="message-content">
                        <strong>Gemini:</strong> Thank you for your question! Based on the context of our previous discussion, I can provide you with more detailed information. This is a simulated response to demonstrate the follow-up conversation functionality of the extension.
                    </div>
                `;
                conversation.appendChild(aiMessage);
                
                sendStatus.textContent = '';
                sendQuestionBtn.disabled = false;
                
                // Scroll to bottom
                aiMessage.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
        });

        // Allow Enter key to send
        followUpQuestion.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendQuestionBtn.click();
            }
        });
    }

    if (clearConversationBtn && conversation) {
        clearConversationBtn.addEventListener('click', () => {
            // Remove all messages except the initial ones
            const messages = conversation.querySelectorAll('.message');
            messages.forEach(message => message.remove());
        });
    }

    // Language model change simulation
    const languageModel = document.getElementById('language-model');
    const languageCode = document.getElementById('language-code');

    if (languageModel) {
        languageModel.addEventListener('change', () => {
            console.log('Language model changed to:', languageModel.value);
        });
    }

    if (languageCode) {
        languageCode.addEventListener('change', () => {
            console.log('Language code changed to:', languageCode.value);
        });
    }

    // Simulate loading states
    function simulateLoading(element, messages, duration = 500) {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent = messages[index % messages.length];
            index++;
        }, duration);
        
        return interval;
    }

    // Add some interactive elements
    const resultsBtn = document.getElementById('results-btn');
    const optionsBtn = document.getElementById('options-btn');

    if (resultsBtn) {
        resultsBtn.addEventListener('click', () => {
            // Switch to results tab
            document.querySelector('[data-tab="results"]').click();
        });
    }

    if (optionsBtn) {
        optionsBtn.addEventListener('click', () => {
            // Switch to options tab
            document.querySelector('[data-tab="options"]').click();
        });
    }

    // Add hover effects and animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Simulate API key validation
    const apiKeyInput = document.getElementById('api-key');
    if (apiKeyInput) {
        apiKeyInput.addEventListener('input', () => {
            const value = apiKeyInput.value;
            if (value.length > 10) {
                apiKeyInput.style.borderColor = '#10b981';
            } else if (value.length > 0) {
                apiKeyInput.style.borderColor = '#f59e0b';
            } else {
                apiKeyInput.style.borderColor = '#e2e8f0';
            }
        });
    }

    // Add installation button functionality
    const installButtons = document.querySelectorAll('.install-card .btn');
    installButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = '✅ Opening Store...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Install Extension';
                button.disabled = false;
            }, 2000);
        });
    });
});