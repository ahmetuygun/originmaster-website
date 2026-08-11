import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useReducedMotion } from 'framer-motion'
import './CodeStudio.css'

type Token = { text: string; type?: 'kw' | 'fn' | 'str' | 'cm' | 'op' | 'num' }

const SOURCE: Token[][] = [
  [
    { text: 'package', type: 'kw' },
    { text: ' ' },
    { text: 'io.originmaster.core' },
  ],
  [],
  [{ text: '/**', type: 'cm' }],
  [{ text: ' * Compose intelligent systems — simple on the surface,', type: 'cm' }],
  [{ text: ' * powerful underneath.', type: 'cm' }],
  [{ text: ' */', type: 'cm' }],
  [
    { text: 'public', type: 'kw' },
    { text: ' ' },
    { text: 'final', type: 'kw' },
    { text: ' ' },
    { text: 'class', type: 'kw' },
    { text: ' ' },
    { text: 'OriginEngine', type: 'fn' },
    { text: ' ' },
    { text: '{' },
  ],
  [],
  [
    { text: '  ' },
    { text: 'public', type: 'kw' },
    { text: ' ' },
    { text: 'static', type: 'kw' },
    { text: ' ' },
    { text: 'void', type: 'kw' },
    { text: ' ' },
    { text: 'main', type: 'fn' },
    { text: '(' },
    { text: 'String', type: 'fn' },
    { text: '[] args) ' },
    { text: '{' },
  ],
  [
    { text: '    ' },
    { text: 'var', type: 'kw' },
    { text: ' platform = ' },
    { text: 'Platform', type: 'fn' },
    { text: '.' },
    { text: 'builder', type: 'fn' },
    { text: '()' },
  ],
  [
    { text: '      .' },
    { text: 'withAI', type: 'fn' },
    { text: '(' },
    { text: 'Intelligence', type: 'fn' },
    { text: '.' },
    { text: 'reasoning', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withScale', type: 'fn' },
    { text: '(' },
    { text: 'Scale', type: 'fn' },
    { text: '.' },
    { text: 'enterprise', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withAutomation', type: 'fn' },
    { text: '(' },
    { text: 'Flows', type: 'fn' },
    { text: '.' },
    { text: 'selfHealing', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withSecurity', type: 'fn' },
    { text: '(' },
    { text: 'ZeroTrust', type: 'fn' },
    { text: '.' },
    { text: 'enabled', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withDesign', type: 'fn' },
    { text: '(' },
    { text: 'Experience', type: 'fn' },
    { text: '.' },
    { text: 'humanCentered', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withData', type: 'fn' },
    { text: '(' },
    { text: 'Insights', type: 'fn' },
    { text: '.' },
    { text: 'realtime', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'withResilience', type: 'fn' },
    { text: '(' },
    { text: 'Failover', type: 'fn' },
    { text: '.' },
    { text: 'multiRegion', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'observe', type: 'fn' },
    { text: '(' },
    { text: 'Telemetry', type: 'fn' },
    { text: '.' },
    { text: 'precise', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'build', type: 'fn' },
    { text: '();' },
  ],
  [],
  [{ text: '    platform' }],
  [
    { text: '      .' },
    { text: 'compose', type: 'fn' },
    { text: '(' },
    { text: 'Product', type: 'fn' },
    { text: '.' },
    { text: 'intelligent', type: 'fn' },
    { text: '()' },
    { text: ')' },
  ],
  [
    { text: '      .' },
    { text: 'optimize', type: 'fn' },
    { text: '(' },
    { text: 'Latency', type: 'fn' },
    { text: '.' },
    { text: 'of', type: 'fn' },
    { text: '(' },
    { text: '"<100ms"', type: 'str' },
    { text: '))' },
  ],
  [
    { text: '      .' },
    { text: 'launch', type: 'fn' },
    { text: '();' },
  ],
  [],
  [
    { text: '    ' },
    { text: 'System', type: 'fn' },
    { text: '.out.' },
    { text: 'println', type: 'fn' },
    { text: '(' },
    { text: '"Originmaster ready."', type: 'str' },
    { text: ');' },
  ],
  [{ text: '  }' }],
  [{ text: '}' }],
]

const flatSource = SOURCE.map((line) => line.map((t) => t.text).join('')).join('\n')
const GIT_COMMAND = 'git push origin master'

type Phase = 'coding' | 'running' | 'git' | 'done' | 'merged'

type StudioState = {
  phase: Phase
  charCount: number
  runLine: number
  gitText: string
  gitDone: boolean
}

const CODE_END = 0.5
const RUN_END = 0.6
const GIT_END = 0.72
const DONE_END = 0.76
const MERGE_SCALE_DESKTOP = 5.6

type LiftOrigin = {
  startCX: number
  startCY: number
  endCX: number
  endCY: number
  fontSize: string
  tracking: string
  maxScale: number
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value))
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function measureLiftOrigin(
  merge: HTMLElement,
  line: HTMLElement,
  studio: HTMLElement,
): LiftOrigin {
  const mergeBox = merge.getBoundingClientRect()
  const lineBox = line.getBoundingClientRect()
  const styles = window.getComputedStyle(line)
  const fontSizePx = Number.parseFloat(styles.fontSize) || 12.5
  const wordWidth = fontSizePx * 0.62 * 'originmaster'.length
  const available = Math.min(studio.clientWidth, window.innerWidth) * 0.84
  const maxScale = Math.max(2.2, Math.min(MERGE_SCALE_DESKTOP, available / wordWidth))

  return {
    startCX: lineBox.left - mergeBox.left + lineBox.width / 2,
    startCY: lineBox.top - mergeBox.top + lineBox.height / 2,
    endCX: merge.clientWidth / 2,
    endCY: merge.clientHeight / 2,
    fontSize: styles.fontSize,
    tracking: styles.letterSpacing || '0px',
    maxScale,
  }
}

function deriveState(progress: number, reduce: boolean | null): StudioState {
  if (reduce) {
    return {
      phase: 'merged',
      charCount: flatSource.length,
      runLine: 5,
      gitText: GIT_COMMAND,
      gitDone: true,
    }
  }

  const p = clamp01(progress)

  if (p < CODE_END) {
    return {
      phase: 'coding',
      charCount: Math.floor((p / CODE_END) * flatSource.length),
      runLine: 0,
      gitText: '',
      gitDone: false,
    }
  }

  if (p < RUN_END) {
    const t = (p - CODE_END) / (RUN_END - CODE_END)
    return {
      phase: 'running',
      charCount: flatSource.length,
      runLine: Math.min(5, 1 + Math.floor(t * 5)),
      gitText: '',
      gitDone: false,
    }
  }

  if (p < GIT_END) {
    const t = (p - RUN_END) / (GIT_END - RUN_END)
    return {
      phase: 'git',
      charCount: flatSource.length,
      runLine: 5,
      gitText: GIT_COMMAND.slice(0, Math.floor(t * GIT_COMMAND.length)),
      gitDone: false,
    }
  }

  if (p < DONE_END) {
    return {
      phase: 'done',
      charCount: flatSource.length,
      runLine: 5,
      gitText: GIT_COMMAND,
      gitDone: true,
    }
  }

  return {
    phase: 'merged',
    charCount: flatSource.length,
    runLine: 5,
    gitText: GIT_COMMAND,
    gitDone: true,
  }
}

function tokenizeVisible(charCount: number): Token[][] {
  if (charCount <= 0) return [[]]
  if (charCount >= flatSource.length) return SOURCE

  let remaining = charCount
  const rows: Token[][] = []

  for (const template of SOURCE) {
    if (remaining <= 0) break

    const lineLen = template.reduce((sum, token) => sum + token.text.length, 0)

    if (remaining >= lineLen) {
      rows.push(template)
      remaining -= lineLen
      // Consume the joining newline when more characters remain.
      if (remaining > 0) remaining -= 1
      continue
    }

    const partial: Token[] = []
    for (const token of template) {
      if (remaining <= 0) break
      if (token.text.length <= remaining) {
        partial.push(token)
        remaining -= token.text.length
      } else {
        partial.push({ ...token, text: token.text.slice(0, remaining) })
        remaining = 0
      }
    }
    rows.push(partial)
    break
  }

  return rows
}

type CodeStudioProps = {
  progress: number
}

export function CodeStudio({ progress }: CodeStudioProps) {
  const reduce = useReducedMotion()
  const studioRef = useRef<HTMLDivElement>(null)
  const mergeRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const gitLineRef = useRef<HTMLParagraphElement>(null)
  const [liftOrigin, setLiftOrigin] = useState<LiftOrigin | null>(null)

  const p = clamp01(progress)
  const state = useMemo(() => deriveState(p, reduce), [p, reduce])
  const { phase, charCount, runLine, gitText, gitDone } = state

  const lines = useMemo(() => tokenizeVisible(charCount), [charCount])
  const totalLines = Math.max(lines.length, 1)
  const rising = phase === 'merged'
  const showCursor = phase === 'coding' || phase === 'git'
  const caretInEditor = phase === 'coding'

  const mergeT = reduce
    ? 1
    : phase === 'merged'
      ? clamp01((p - DONE_END) / (1 - DONE_END))
      : 0

  const raiseT = mergeT
  // Stay locked to the command-line position while growing, then move to center.
  const moveT = clamp01((mergeT - 0.4) / 0.6)
  const raiseScale = lerp(1, liftOrigin?.maxScale ?? MERGE_SCALE_DESKTOP, raiseT)
  const prefixT = clamp01((mergeT - 0.42) / 0.32)
  const gapT = clamp01((mergeT - 0.52) / 0.3)
  const overlayOpacity =
    phase === 'merged' ? clamp01((mergeT - 0.22) / 0.4) : 0

  useLayoutEffect(() => {
    if (phase !== 'done' && phase !== 'merged') {
      if (phase !== 'git') setLiftOrigin(null)
      return
    }

    const studio = studioRef.current
    const merge = mergeRef.current
    const line = gitLineRef.current
    if (!studio || !merge || !line) return

    // Measure once when arriving at done/merged — avoid per-frame layout thrash.
    setLiftOrigin((prev) => {
      if (prev && phase === 'merged') return prev
      return measureLiftOrigin(merge, line, studio)
    })
  }, [phase, gitDone])

  useLayoutEffect(() => {
    if (phase !== 'coding') return

    const caret = caretRef.current
    const editor = editorRef.current
    if (!caret || !editor) return

    const caretBottom = caret.offsetTop + caret.offsetHeight
    const viewBottom = editor.scrollTop + editor.clientHeight - 24

    if (caretBottom > viewBottom || caret.offsetTop < editor.scrollTop + 8) {
      editor.scrollTop = Math.max(0, caretBottom - editor.clientHeight + 28)
    }
  }, [charCount, phase, lines.length])

  useLayoutEffect(() => {
    if (phase === 'coding') return
    const terminal = terminalRef.current
    if (!terminal) return
    terminal.scrollTop = terminal.scrollHeight
  }, [phase, runLine, gitDone])

  const snapshotStyle: CSSProperties | undefined = liftOrigin
    ? {
        left: `${lerp(liftOrigin.startCX, liftOrigin.endCX, moveT)}px`,
        top: `${lerp(liftOrigin.startCY, liftOrigin.endCY, moveT)}px`,
        fontSize: liftOrigin.fontSize,
        letterSpacing: liftOrigin.tracking,
        transform: `translate(-50%, -50%) scale(${raiseScale})`,
      }
    : undefined

  return (
    <div
      ref={studioRef}
      className={`studio ${rising ? 'studio--merged' : ''}`}
      aria-hidden="true"
    >
      <div className="studio__chrome">
        <div className="studio__traffic">
          <span />
          <span />
          <span />
        </div>
        <div className="studio__title">OriginEngine.java — originmaster</div>
        <div className="studio__actions">
          <span className="studio__run-badge">
            {phase === 'running' || phase === 'git' || phase === 'done' || phase === 'merged'
              ? '▶ Run'
              : '▶'}
          </span>
        </div>
      </div>

      <div className="studio__toolbar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Run</span>
        <span>Git</span>
      </div>

      <div className="studio__body">
        <aside className="studio__sidebar">
          <p>PROJECT</p>
          <ul>
            <li>originmaster</li>
            <li className="is-open">src</li>
            <li className="is-file is-active">OriginEngine.java</li>
            <li className="is-file">Platform.java</li>
            <li className="is-file">Intelligence.java</li>
            <li className="is-file">Telemetry.java</li>
          </ul>
        </aside>

        <div className="studio__main">
          <div className="studio__tabs">
            <div className="studio__tab is-active">OriginEngine.java</div>
            <div className="studio__tab">Terminal</div>
          </div>

          <div className="studio__editor" ref={editorRef}>
            <div className="studio__gutter">
              {Array.from({ length: Math.max(totalLines, 18) }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre className="studio__code">
              {(charCount > 0 ? lines : [[]]).map((line, index, arr) => (
                <div key={index} className="studio__line">
                  {line.map((token, tokenIndex) => (
                    <span
                      key={`${index}-${tokenIndex}`}
                      className={token.type ? `tok tok--${token.type}` : undefined}
                    >
                      {token.text}
                    </span>
                  ))}
                  {caretInEditor && index === arr.length - 1 && (
                    <span className="studio__caret" ref={caretRef} />
                  )}
                </div>
              ))}
            </pre>
          </div>

          <div className="studio__terminal">
            <div className="studio__terminal-bar">
              <span>Terminal</span>
              <span>local</span>
            </div>
            <div className="studio__terminal-body" ref={terminalRef}>
              {(phase === 'running' || phase === 'git' || phase === 'done' || phase === 'merged') && (
                <>
                  {runLine >= 1 && (
                    <p>
                      <span className="studio__prompt">$</span> java OriginEngine
                    </p>
                  )}
                  {runLine >= 2 && (
                    <p className="studio__out">AI reasoning graph compiled · 12 nodes</p>
                  )}
                  {runLine >= 3 && (
                    <p className="studio__out">Automation flows online · self-healing enabled</p>
                  )}
                  {runLine >= 4 && (
                    <p className="studio__out">Originmaster ready. Latency target &lt;100ms</p>
                  )}
                  {runLine >= 5 && (
                    <p className="studio__out studio__out--ok">Build successful in 0.84s</p>
                  )}
                </>
              )}

              {(phase === 'git' || phase === 'done' || phase === 'merged') && (
                <p ref={gitLineRef} className="studio__git-line">
                  <span className="studio__prompt">$</span>{' '}
                  {phase === 'git' ? gitText : GIT_COMMAND}
                  {phase === 'git' && showCursor && <span className="studio__caret" />}
                </p>
              )}

              {gitDone && (
                <div
                  className="studio__git-result"
                  style={{
                    opacity: rising ? Math.max(0, 1 - overlayOpacity * 1.35) : 1,
                  }}
                >
                  <p className="studio__out">Enumerating objects: 18, done.</p>
                  <p className="studio__out">Writing objects: 100% (18/18), done.</p>
                  <p className="studio__out studio__out--ok">
                    To github.com:originmaster/platform.git
                  </p>
                  <p className="studio__out studio__out--ok">
                    &nbsp;&nbsp;&nbsp;a1c83e2..f9e21b4&nbsp; master -&gt; master
                  </p>
                </div>
              )}

              {phase === 'coding' && (
                <p className="studio__muted">Scroll to write the next lines…</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={mergeRef}
        className={`studio__merge ${rising ? 'is-visible' : ''}`}
      >
        <div className="studio__merge-bg" style={{ opacity: overlayOpacity }} />
        <div className="studio__snapshot" style={snapshotStyle}>
          <span
            className="studio__snap-prompt"
            style={{
              opacity: 1 - prefixT,
              maxWidth: `${(1 - prefixT) * 1.5}em`,
              marginRight: `${(1 - prefixT) * 0.45}rem`,
            }}
          >
            $
          </span>
          <span
            className="studio__snap-prefix"
            style={{
              opacity: 1 - prefixT,
              maxWidth: `${(1 - prefixT) * 9}em`,
            }}
          >
            git push
          </span>
          <span
            className="studio__snap-gap studio__snap-gap--prefix"
            style={{
              width: `${(1 - prefixT) * 0.28}em`,
              opacity: 1 - prefixT,
            }}
          />
          <span className="studio__snap-origin">origin</span>
          <span
            className="studio__snap-gap studio__snap-gap--words"
            style={{
              width: `${(1 - gapT) * 0.28}em`,
              opacity: 1 - gapT,
            }}
          />
          <span className="studio__snap-master">master</span>
        </div>
      </div>
    </div>
  )
}
