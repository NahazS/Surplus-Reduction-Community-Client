import React from 'react';
import Carousel from 'react-elastic-carousel';
import Comment from '../../../AllSlider/Comment';
const CommentSection = () => {
    const items = [
        {id: 1, commentText: '"We had a week where we had nothing, and Community Food Share made all the difference.”'},
        {id: 2, commentText: '"I am proud to say I volunteer for Community Food Share. You all are doing incredible things for your neighbors and volunteers.”'},
        {id: 3, commentText: '"Wonderful organization. I always leave with a cart full of food and a smile on my face. Thank you for all that you do.”'},
        {id: 4, commentText: '" The work of Community Food Share and their community partners is not only life-saving, but also ‘life-enabling.’ "'},
        {id: 5, commentText: '“Thank you for all your hard work and kindness! I do not know what I would have done without this service."'},
        {id: 5, commentText: '“We were in a fix and just did not have the money coming in, but I needed to support my four grandkids."'},
    ]
    return (
        <div>
            <div className='mt-[100px]'>
                <Carousel enableAutoPlay autoPlaySpeed={2000} showArrows={false}>
                    {items.map((item) => (
                        <Comment key={item.id} commentText={item.commentText} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CommentSection;