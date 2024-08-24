import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;


const movements_url= REACT_APP_BACKEND_URL+"/movements";
export const fetchMovements=(user_id)=>axios.get(movements_url,{ params: { usrId: user_id} });
export const createMovement=(newMovement)=> axios.post(movements_url, newMovement);
export const updateMovement=(updatedMovement)=> axios.put(`${movements_url}/${updatedMovement.id}`, updatedMovement);
export const deleteMovement=(deleteMovementId)=> axios.delete(`${movements_url}/${deleteMovementId}`);
const jars_url= REACT_APP_BACKEND_URL+"/jars";
export const fetchJars=(user_id)=>axios.get(jars_url,{ params: { usrId: user_id} });
export const createJar=(newJar)=> axios.post(jars_url, newJar); 
export const updateJar=(updatedJar)=> axios.put(`${jars_url}/${updatedJar.id}`, updatedJar);
export const deleteJar=(deleteJarId)=> axios.delete(`${jars_url}/${deleteJarId}`);
const users_url= REACT_APP_BACKEND_URL+"/users";
export const fetchUser = (userEmail) => axios.get(users_url, { params: { email: userEmail } });
export const createUser=(newUser)=> axios.post(users_url, newUser); 
// const transactions_url= REACT_APP_BACKEND_URL+"/transactions";
// export const fetchTransactions=()=>axios.get(transactions_url);
// export const createTransaction=(newTransaction)=> axios.post(transactions_url, newTransaction);
// export const deleteTransaction=(deleteTransactionId)=> axios.delete(`${transactions_url}/${deleteTransactionId}`);

