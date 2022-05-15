import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import Shop from './ShopComponent'

/* Carousel seems to move and change size during transitions on lg screens or larger... Implemented a temporary fix by using a flex carousel for md and smaller and a fixed size carousel for lg and bigger.
See https://6-4-0--reactstrap.netlify.app/components/carousel/ for more info on carousels (and where I got some of the code) */
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
        const nextIndex = this.state.activeIndex === this.props.nails.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.nails.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    
    render() {
        const { activeIndex } = this.state;

        const slides = this.props.nails.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} className="img-fluid img-responsive" />
                    <CarouselCaption captionText="$?" captionHeader={item.name} />
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
                        <CarouselIndicators items={this.props.nails} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            </div>
        );
    }
}
// Basically the same as above except that it's a fixed size
class HomeCarouselLg extends HomeCarousel {

    render() {
        const { activeIndex } = this.state;

        const slides = this.props.nails.map((item) => {
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
                    <CarouselIndicators items={this.props.nails} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

// Home page function itself

function Home(props) {
    return (
        <div>
            <HomeCarousel nails={props.nails} />
            <HomeCarouselLg nails={props.nails}/>
            <div className="row">
                <h2 className="col">Best sellers</h2>
            </div>
            {/* As of now the home page just has the shop page at the bottom of it, so just importing it here to DRY */}
            < Shop />
        </div>
    )
}

export default Home;