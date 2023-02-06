import "./ActionArea.css";

const ActionArea =({onAction})=> {
    return <div className="action-area">
        <div className="action-area-line">
            <div className="action-area-line-option" onClick={()=>onAction('UP')}>👆</div>
            <div className="action-area-line-option" onClick={()=>onAction('DOWN')}>👇</div>
        </div>
        <div className="action-area-line">
            <div className="action-area-line-option" onClick={()=>onAction('RED')}>🔴 </div>
            <div className="action-area-line-option" onClick={()=>onAction('BLACK')}>⚫️</div>
        </div> <div className="action-area-line">
            <div className="action-area-line-option" onClick={()=>onAction('BARRITO')}>🍀</div>
            <div className="action-area-line-option" onClick={()=>onAction('DOUBLE_BARRITO')}>2 𝘅 🍀</div>
        </div>
    </div>
}

export default ActionArea;