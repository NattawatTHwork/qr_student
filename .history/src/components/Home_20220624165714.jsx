import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container py-24 mx-auto">
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2">
              <thead>
                <tr>
                  <th scope='col' className='border-2'><p className='ml-2 mt-2 mr-2 mb-2'>หมายเลข</p></th>
                  <th scope='col' className='border-2 border-white text-lg'><p className='ml-2 mt-2 mr-2 mb-2'>กฎ</p></th>
                  {adminstate ? (
                    <>
                  <th scope='col' className='border-2 border-white text-lg'><p className='ml-2 mt-2 mr-2 mb-2'>ลบ</p></th>
                    </>
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {rule.map((rule) => (
                  <tr key={rule.id}>
                    <th scope='row' className='border border-white ml-2 mt-2 mr-2 mb-2'><p className='ml-2 mt-2 mr-2 mb-2'>{count=count+1}</p></th>
                    <td className='border-2 border-white'><p className='ml-2 mt-2 mr-2 mb-2'>{rule.rule}</p></td>
                    {adminstate ? (
                      <>
                    <td className='border-2 border-white'><button className="text-white border border-white hover:bg-white hover:text-sky-900 active:bg-white active:text-sky-900 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none ml-2 mt-2 mr-2 mb-2 ease-linear transition-all duration-150" onClick={() => setShowModal(rule)}>ลบ</button></td>
                      </>
                    ) : null}
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