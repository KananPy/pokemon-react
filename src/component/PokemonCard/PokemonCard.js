import React, { Component } from 'react'
import styles from "./PokemonCard.module.css"
import {convertItemImage} from "../../shared/utils/convertImageItem"




export class PokemonCard extends Component {
  render() {

    const{id, name, type, base_experience} = this.props

    return (
      <div className={styles.card}>

        <div>{name}</div>
        <img alt='...' src={convertItemImage(id)} />
        <div>Type: {type}</div>
        <div>EXP: {base_experience}</div>
      </div>
    )
  }
}

