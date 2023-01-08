import React from 'react'
import { personProps } from './Person.types';


export default function Person(props: personProps) {
  return (
    <div>
        <p style={props.styles}>{props.name} {props.arr[0].teacher} </p>
    </div>
  )
}
