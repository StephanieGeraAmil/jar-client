import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;


const movements_url= REACT_APP_BACKEND_URL+"/movements";
export const fetchMovements=()=>axios.get(movements_url);
export const createMovement=(newMovement)=> axios.post(movements_url, newMovement);
export const updateMovement=(updatedMovement)=> axios.put(`${movements_url}/${updatedMovement.id}`, updatedMovement);
export const deleteMovement=(deleteMovementId)=> axios.delete(`${movements_url}/${deleteMovementId}`);
const jars_url= REACT_APP_BACKEND_URL+"/jars";
export const fetchJars=()=>axios.get(jars_url);
export const createJar=(newJar)=> axios.post(jars_url, newJar); 
export const updateJar=(updatedJar)=> axios.put(`${jars_url}/${updatedJar.id}`, updatedJar);
export const deleteJar=(deleteJarId)=> axios.delete(`${jars_url}/${deleteJarId}`);
// const transactions_url= REACT_APP_BACKEND_URL+"/transactions";
// export const fetchTransactions=()=>axios.get(transactions_url);
// export const createTransaction=(newTransaction)=> axios.post(transactions_url, newTransaction);
// export const deleteTransaction=(deleteTransactionId)=> axios.delete(`${transactions_url}/${deleteTransactionId}`);

