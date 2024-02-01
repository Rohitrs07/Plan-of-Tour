import React from 'react'
import Card from './Card';
const Tours = ({tours,removeTour}) => {

    return (
        <div className='container'>
           <div>
                <h2 className='title' > Plan Of Tour </h2>
           </div>
           <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id}
                         {...tour} removeTour={removeTour}></Card>
                    } )
                }
            {/* here instead of writing different cards for different cities in tours array we use map function */}
            {/* key={tour.id} => it is a good practice to pass key while using map function */}
           </div>
        </div>
    );
}

export default Tours;