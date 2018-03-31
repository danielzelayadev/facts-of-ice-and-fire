import axios from 'axios';
import { ICE_AND_FIRE_BASE_URL } from '../../constants';

const url = `${ICE_AND_FIRE_BASE_URL}/characters`;

export const getCharacterByName = name => axios.get(`${url}?name=${name}`); // eslint-disable-line
