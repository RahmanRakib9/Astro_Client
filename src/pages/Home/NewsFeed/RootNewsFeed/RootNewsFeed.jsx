import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa"
import moment from 'moment/moment';
import Rating from 'react-rating';
import useSetTitle from '../../../../customHooks/SetTitle/UseSetTitle';

const RootNewsFeed = () => {
    //display dynamic title
    useSetTitle("Home");

    return (
        <div>
            <Card className='mb-4'>
                <Card.Header as="h5">title</Card.Header>
                <section className='d-flex align-items-center'>
                    <div>
                        <Image src="" roundedCircle />
                    </div>
                    <div className='ps-2 flex-grow-1'>
                        <p>author name</p>
                        {/* Apply Moment Js Date format here */}
                        <p><small>{moment().format("YYYY-MM-DD")}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />

                    </div>
                </section>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Img variant='top' src="" />
                    <Card.Text>
                        details....
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className='text-muted'>
                    <section className='d-flex'>
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating="ratings number"
                            >
                            </Rating>
                            <span>rating</span>
                        </div>
                        <div>
                            <FaEye />total view
                        </div>
                    </section>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default RootNewsFeed;