const GifGridItem = ({ title, url }) => {

  return (
    <div className='card animate__animated animate__fadeIn'>

        <h2> { title } </h2>
        <img src={url} alt={title} />

    </div>
  )
}

export default GifGridItem