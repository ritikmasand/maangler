import React from 'react'
import SingleEmoji from './SingleEmoji'

function EmojiContainer({list}) {
  return (
    <div>
      {list.map((singleEmoji,idx)=>{
        return (
          <SingleEmoji key= {idx} singleEmoji = {singleEmoji}/>
        )
      })}
    </div>
  )
}

export default EmojiContainer
