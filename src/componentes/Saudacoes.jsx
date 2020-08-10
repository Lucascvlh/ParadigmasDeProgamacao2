import React from 'react';

const bomDia = props => <h3>Bom dia {props.timeA}</h3>

const boaTarde = props => <h3>Boa tarde {props.timeB}</h3>

const boaNoite = props => <h3>Boa noite {props.nome}</h3>

export default {bomDia, boaTarde, boaNoite}