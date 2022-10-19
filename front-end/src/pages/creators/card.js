import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Contact from './contact';

const Card = (props) => {

  const [users, setUsers] = useState([]);
  const [limitUser, setLimitUser] = useState('6');
  const [page, setPage] = useState('1');
  const [countPage, setCountPage] = useState('');
  const [countUser, setCountUser] = useState('');

  console.log(users, "user");

  const rows = [];
  for(var i = 1; i <=countPage; i++){
    rows.push(i)
  }

  useEffect(()=>{
    getUser();
    countPages();
  },[countUser, page]);

  const countPages = () => {
    const count = countUser / limitUser;
    setCountPage(Math.ceil(count));
  }
 
  const getUser = async() => {
    const response = await axios.get(`http://127.0.0.1:5000/users_page/${limitUser}&${page}`);
    const data = response.data.users.rows;
    const count = response.data.users.count;
    setCountUser(Math.ceil(count));
    setUsers(data);
  }

  const handlePriview = () => {
    const count = page - 1;
    if(count < 1){
      setPage(1);
    }
    else{
      setPage(count);
    }
  }

  const handleNext = () => {
    const count = page + 1;
    if(count > countPage){
      setPage(countPage)
    }
    else{
      setPage(count);
    }
  }

  const handleRow = (row) => {
    setPage(row);
  }

  return (
    <React.Fragment>
      <div className='pb-6 bg-white drop-shadow-xl'>
        <div className="grid grid-cols-3 gap-6 content-start  p-10">
          {users.map((user, index)=>(
          <div class="card flex flex-col w-80 md:w-3/4 lg:w-80 mx-auto rounded-lg bg-[#EAEAFA] px-6">
              <div class="profileCreator flex py-4 gap-x-8">
              <img
                src={user.image ? user.image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                alt=""
                className=" w-20 h-20 lg:w-20 border-3 border-white rounded-full mt-6 lg:mt-0"
              />
              <div class="card-text mt-3 text-sm md:mt-6  md:text-2xl lg:text-sm lg:mt-3">
                <p class="card-name mb-3 uppercase">{user.name}</p>
                <p class="card-quotes italic">{user.email}</p>
              </div>
            </div>
            <Contact userId={user.id} />
          </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='mx-4 bg-blue-400 px-4 hover:bg-blue-600 text-white min-w-[6rem]' onClick={()=>handlePriview()}>Preview</button>
          {rows.map((row, index)=>(
            <button className={`mx-4 ${row == page ? 'bg-blue-600' : 'bg-blue-400'}  px-4 text-white hover:bg-blue-600`} onClick={()=>handleRow(row)}>{row}</button>
          ))}
          <button className='mx-4 bg-blue-400 hover:bg-blue-600 px-4 text-white min-w-[6rem]' onClick={()=>handleNext()}>Next</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
