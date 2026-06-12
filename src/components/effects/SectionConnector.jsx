import useReducedMotion from '../../hooks/useReducedMotion'
import './SectionConnector.css'

const FLOW = Array.from({ length: 6 }, (_, i) => i)

/**
 * SectionConnector — a vertical "energy beam" with flowing particles and a
 * pulsing node that links two sections into one continuous, futuristic flow.
 * Decorative only.
 */
export default function SectionConnector() {
  const reduced = useReducedMotion()
  return (
    <div className="connector" aria-hidden="true">
      <span className="connector__beam" />
      {!reduced && (
        <div className="connector__flow">
          {FLOW.map((i) => (
            <span key={i} className="connector__dot" style={{ '--i': i }} />
          ))}
        </div>
      )}
      <span className="connector__rings" />
      <span className="connector__node" />
    </div>
  )
}
