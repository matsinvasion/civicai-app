import { useState, useEffect, useRef } from 'react'

const starterQuestions = {
  URSB: [
    'How do I register a sole proprietorship?',
    'What documents do I need to register a company?',
    'How do I search if a business name is available?',
    'How much does it cost to register a business?'
  ],
  URA: [
    'How do I get a TIN number?',
    'How do I file my taxes online?',
    'What taxes does a small business pay?',
    'How do I register for VAT?'
  ],
  KCCA: [
    'How do I get a trading licence in Kampala?',
    'How much does a trading licence cost?',
    'How do I renew my trading licence?',
    'What permits do I need to open a restaurant?'
  ],
  NSSF: [
    'How do I register with NSSF?',
    'How much do I contribute to NSSF?',
    'How do I check my NSSF balance?',
    'When can I access my NSSF savings?'
  ],
  MoIA: [
    'How do I apply for a passport?',
    'What documents do I need for a national ID?',
    'How long does a passport take to process?',
    'How do I apply for a visa to Uganda?'
  ]
}

export default function ChatScreen({ agency, onBack }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Oli otya! 👋 I'm your CivicAI guide for ${agency.fullName}. How can I help you today?\n\nOnyamba atya? Ndyabaza ku bifo bya ${agency.name}.`
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(text) {
    const userMessage = text || input
    if (!userMessage.trim()) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          agency: agency.id
        })
      })

      const data = await response.json()

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer,
          sources: data.sources
        }
      ])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again in a moment."
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={{ ...styles.header, backgroundColor: agency.color }}>
        <button style={styles.backButton} onClick={onBack}>
          ← Back / Ddayo
        </button>
        <div style={styles.headerCenter}>
          <span style={styles.headerIcon}>{agency.icon}</span>
          <div>
            <div style={styles.headerName}>{agency.name}</div>
            <div style={styles.headerFullName}>{agency.fullName}</div>
          </div>
        </div>
      </div>

      {/* Starter questions */}
      {messages.length === 1 && (
        <div style={styles.starterSection}>
          <p style={styles.starterLabel}>Common questions / Ebibuuzo ebisinga okubuzibwa</p>
          <div style={styles.starterGrid}>
            {starterQuestions[agency.id]?.map((q, i) => (
              <button
                key={i}
                style={styles.starterChip}
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={styles.messageList}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.messageRow,
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            {msg.role === 'assistant' && (
              <div style={styles.avatar}>🇺🇬</div>
            )}
            <div style={{
              ...styles.bubble,
              ...(msg.role === 'user' ? styles.bubbleUser : styles.bubbleAssistant)
            }}>
              <p style={styles.bubbleText}>{msg.content}</p>
              {msg.sources && msg.sources.length > 0 && (
                <div style={styles.sources}>
                  <span style={styles.sourcesLabel}>Sources: </span>
                  {msg.sources.map((s, si) => (

                      key={si}
                      href={s.split(': ')[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.sourceLink}
                    >
                      {s.split(': ')[0]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ ...styles.messageRow, justifyContent: 'flex-start' }}>
            <div style={styles.avatar}>🇺🇬</div>
            <div style={{ ...styles.bubble, ...styles.bubbleAssistant }}>
              <div style={styles.typingDots}>
                <span style={styles.dot} />
                <span style={styles.dot} />
                <span style={styles.dot} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={styles.inputArea}>
        <textarea
          style={styles.input}
          placeholder="Type your question... / Wandiika ekibuuzo kyo..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <button
          style={{
            ...styles.sendButton,
            backgroundColor: loading ? '#CCCCCC' : agency.color
          }}
          onClick={() => sendMessage()}
          disabled={loading}
        >
          ➤
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#F8F9FA',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  header: {
    padding: '16px 20px',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  backButton: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '13px',
    padding: '6px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  headerCenter: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  headerIcon: {
    fontSize: '32px'
  },
  headerName: {
    fontSize: '20px',
    fontWeight: '700'
  },
  headerFullName: {
    fontSize: '12px',
    opacity: 0.8
  },
  starterSection: {
    padding: '16px 16px 8px'
  },
  starterLabel: {
    fontSize: '12px',
    color: '#666666',
    margin: '0 0 10px 0',
    fontStyle: 'italic'
  },
  starterGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  starterChip: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '20px',
    padding: '8px 14px',
    fontSize: '12px',
    color: '#333333',
    cursor: 'pointer',
    textAlign: 'left'
  },
  messageList: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  messageRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '8px'
  },
  avatar: {
    fontSize: '24px',
    flexShrink: 0
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: '16px',
    padding: '12px 14px'
  },
  bubbleUser: {
    backgroundColor: '#1A3A5C',
    color: '#FFFFFF',
    borderRadius: '16px 16px 4px 16px'
  },
  bubbleAssistant: {
    backgroundColor: '#FFFFFF',
    color: '#111111',
    border: '1px solid #E5E7EB',
    borderRadius: '16px 16px 16px 4px'
  },
  bubbleText: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap'
  },
  sources: {
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px solid #E5E7EB',
    fontSize: '11px',
    color: '#666666'
  },
  sourcesLabel: {
    fontWeight: '600'
  },
  sourceLink: {
    color: '#1A3A5C',
    textDecoration: 'none',
    marginLeft: '4px'
  },
  typingDots: {
    display: 'flex',
    gap: '4px',
    padding: '4px 0'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#CCCCCC',
    animation: 'pulse 1.4s infinite'
  },
  inputArea: {
    display: 'flex',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #E5E7EB'
  },
  input: {
    flex: 1,
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    padding: '10px 14px',
    fontSize: '14px',
    fontFamily: 'inherit',
    resize: 'none',
    outline: 'none'
  },
  sendButton: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    cursor: 'pointer',
    flexShrink: 0
  }
}