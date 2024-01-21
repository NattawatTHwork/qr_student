import React, { useEffect } from 'react'
import { collection , query , where , onSnapshot , addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase';

const Home = () => {
  const [student, setStudent] = useState([])

  useEffect(() => {
    const q = query(collection(db, "list"));
    onSnapshot(q, (QuerySnapshot) => {
      setStudent(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, sid: doc.data().sid, firstname: doc.data().firstname, lastname: doc.data().lastname })))
    });
  }, [])

  return (
    <div>
      <div className="container py-24 mx-auto">
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2">
              <thead>
                <tr>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>หมายเลข</p></th>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>กฎ</p></th>
                </tr>
              </thead>
              <tbody>
                {student.map((rule) => (
                  <tr key={rule.id}>
                    <th scope='row' className='border border-white ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{count=count+1}</p></th>
                    <td className='border-2 border-white'><p className='ml-2 mt-2 mr-2 mb-2'>{rule.rule}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Home