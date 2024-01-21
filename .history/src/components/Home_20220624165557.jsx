import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container py-24 mx-auto">
        <div className='flex'>
          <div className='flex mx-auto'>
            <table className="border-collapse border-2 border-white text-white">
              <thead>
                <tr>
                  <th scope='col' className='border-2 border-white text-lg'><p className='ml-2 mt-2 mr-2 mb-2'>หมายเลข</p></th>
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
        <div className="p-2 w-full">
          <button className="flex mx-auto text-sky-600 border border-sky-600 hover:bg-white hover:text-sky-900 active:bg-white active:text-sky-900 font-bold uppercase text-xs rounded outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => state()}>แก้ไขกฎ</button>
        </div> 
        {adminstate ? (
          <>
            <div className="flex flex-col text-center w-full mt-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">เพิ่มกฎ</h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto mt-5">
              <div className="flex flex-wrap m-2">
                <div className="p-2 w-full">
                  <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-white">กฎใหม่</label>
                    <input 
                      className="w-full bg-sky-900 bg-opacity-40 rounded border border-sky-900 focus:border-sky-900 focus:bg-sky-800 focus:ring-2 focus:ring-sky-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="กฎใหม่"
                      onChange={e => updateFormInput({ ...formInput, rule: e.target.value })}
                      />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white border border-white hover:bg-white hover:text-sky-900 active:bg-white active:text-sky-900 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mt-4 ease-linear transition-all duration-150" onClick={() => addRule()}>เพิ่ม</button>
                </div>            
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Home