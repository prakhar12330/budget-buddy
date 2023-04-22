import React from 'react'
import "./card.css"
const Card = () => {
    return (
        <div class="cardcontainer" data-target="1">
            <div className='cardsections'>

                <div className='cleft'>
                    <div className='csectionl'>
                        <div className='cleftTop'> Florida -> Delhi</div>
                        <div className='cleftBottom'>
                            <div>
                                date 1
                            </div>
                            <div>
                                date 2
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cright'>
                    <div className='crightTop'>
                        Charge
                    </div>
                    <div className='crightBottom'>
                        500
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;