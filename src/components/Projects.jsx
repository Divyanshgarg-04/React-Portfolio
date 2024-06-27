import Projectcard from "./Projectcard"

function Projects() {
  return (
    <div>
        <div className='flex flex-row justify-center'>
            <h1 className='text-5xl m-0 font-semibold underline underline-offset-[7px]'>My Projects</h1>
        </div>
        <div className='p-1'>
            <div className='m-2'>
                <Projectcard></Projectcard>
                <Projectcard></Projectcard>
                <Projectcard></Projectcard>
            </div>
        </div>
    </div>
  )
}

export default Projects
