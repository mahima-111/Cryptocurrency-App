import teamPic1 from '../assets/team_pic1.png';
import teamPic2 from '../assets/team_pic2.png';
import teamPic3 from '../assets/team_pic3.png';
const teamArr=[
    {id:1,name:'John Smith',pic:teamPic1},
    {id:2,name:'Elina Williams',pic:teamPic2},
    {id:3,name:'John Smith',pic:teamPic3},
]
const Team = () => {
    return (
        <div className="bg-white rounded-md p-3 lg:p-6 flex flex-col gap-6 mb-5 border-[1.5px] lg:border-0">
            <h3 className="text-2xl font-semibold">Team</h3>
            <p className="text-gray-700 font-medium text-md">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

            {teamArr.map(({id,name,pic})=>{
            return <div key={id} className='bg-sky-100/70 p-2 lg:px-6 py-3 rounded-md flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex flex-col lg:gap-1 items-center'>
                <img src={pic} className='rounded-md h-28 w-28 object-cover'/>
                <h4 className='text-lg lg:text-md font-semibold mt-2 lg:mt-0'>{name}</h4>
                <h6 className='font-medium text-sm lg:text-xs text-gray-500'>Designation here</h6>
                </div>

                <p className='text-gray-800 font-medium lg:font-normal text-md lg:text-sm lg:w-[80%] mt-4 mb-2 lg:my-0'>
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
                </p>
            </div>
            })}
        </div>
    )
}

export default Team