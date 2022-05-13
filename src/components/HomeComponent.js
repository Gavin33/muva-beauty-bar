import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import NAILS from '../shared/Nails';
import { Fade, Stagger } from 'react-animation-components';

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === NAILS.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? NAILS.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

/*     fadeControls(activeIndex, slides) {
        if (!this.animating) return (
            <Stagger in>
                <Fade>
                    <CarouselIndicators items={NAILS} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                </Fade>
                {slides}
                <Fade>
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                </Fade>
                <Fade>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Fade>
            </Stagger>
        )
    } */

    render() {
        const { activeIndex } = this.state;

        const slides = NAILS.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} className="img-fluid img-responsive" />
                    <CarouselCaption captionText={item.name} captionHeader={item.name} />
                </CarouselItem>
            );
        });

        return (
            <div className="container">
                <div className="row d-flex justify-content-center d-block d-lg-none">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                        className="col-sm-10 col-md-8 col-lg-6"
                    >
                        <CarouselIndicators items={NAILS} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            </div>
        );
    }
}

class HomeCarouselLg extends HomeCarousel {

    render() {
        const { activeIndex } = this.state;

        const slides = NAILS.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} className="lg-carousel-img" />
                    <CarouselCaption captionText="$?" captionHeader={item.name} />
                </CarouselItem>
            );
        });

        return (
            <div className="d-none d-lg-block carousel-fix">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="lg-carousel"
                >
                    <CarouselIndicators items={NAILS} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

function RenderCard(item) {
    item.map(item => {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    );
}


function Home(props) {
    /*     console.log(props.partner)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard
                            item={props.campsite}
                            isLoading={props.campsitesLoading}
                            errMess={props.campsitesErrMess}
                        />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard
                            item={props.promotion}
                            isLoading={props.promotionLoading}
                            errMess={props.promotionErrMess}
                        />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard
                            item={props.partner}
                            isLoading={props.partnersLoading}
                            errMess={props.partnersErrMess} />
                    </div>
                </div>
            </div>
        ); */
    return (
        <div>
            <HomeCarousel />
            <HomeCarouselLg />
        </div>
    )
}

export default Home;