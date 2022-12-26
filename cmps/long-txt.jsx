const { useState } = React


export function LongTxt({ txt, length = 100 }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const shortTxt = (txt.length > length) ? `${txt.substring(0, length)}...` : txt

    return <div>
        {isExpanded ? txt : shortTxt}
      {txt.length > length && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
}