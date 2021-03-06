import React from 'react'
import InlineSVG from 'svg-inline-react'
import {includesLoose} from './Utils'


export default props => (
    <div
        className={`category ${props.active ? 'active' : ''} ${props.categoryNames.includes(props.name) ? 'exists' : ''}`}
        onClick={_ => props.active ? props.toggleEditing(props.i) : props.switchTab(props.i)
        }>
        <p>{props.name}</p>
        <button className="remove" onClick={e => props.removeCategory(e, props.i)} >
            <InlineSVG src={require('../public/remove.svg')} />
        </button>
    </div>
)
