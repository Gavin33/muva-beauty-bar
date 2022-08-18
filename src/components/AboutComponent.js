import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';

/**
 *
 * Main display component for About page.
 * Props is passed to PartnerList component
 */
function About(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>About Muva Beauty Bar and our Mission/Vision</h3>
          <p>Since she was allowed to start getting her nails done at the age of 14, founder and CEO Brittany has had a passion for nails and all things beauty. There is no better feeling that having your hair and eyebrows done, with a fresh and beautiful set of nails and toes to match. Muva Beauty Bar was founded in July 2019 with the intent of helping women, especially mothers feel beautiful from the inside and out.</p>
          <p>At Muva Beauty Bar, we believe that everyone should be able to have a relaxing moment and to feel good about themselves. The most fulfilling part of our job is to help women, especially mothers feel beautiful, both inside and out.</p> 
          <p>Here at Muva Beauty Bar, we visualize creating deep and meaningful connections with our clients, their families, and our fellow team members through trust and integrity. We will persistently create a strong, supportive family environment that will help us facilitate passion, relaxation, and work/life balance. </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Facts At a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">July 3, 2019</dd>
                <dt className="col-6">Credentials</dt>
                <dd className="col-6">Brittany is a Licensed Full Specialist, providing nail care and facial services. She also has a Master's in Business </dd>
                <dt className="col-6">No. of Reviews in 2021</dt>
                <dd className="col-6">250</dd>
                <dt className="col-6">Location</dt>
                <dd className="col-6">Clermont, Fl and surrounding areas</dd>
              </dl>
            </CardBody>
          </Card> 
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">
                  "Self Care is giving the world the best of you instead of what is left of you."
                </p>
                <br/>
                <footer className="blockquote-footer">
                  Muriel Strode,{' '}
                  <cite title="Source Title">
                    Brittany M. Taylor, MBA
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* We'd put partners here... if we had them! */}
{/*       <div className="row row-content">
        <div className="col-12">
          <h3>Community Partners</h3>
        </div>
        <PartnerList partners={props.partners} />
      </div> */}
    </div>
  
  );
}
// More partners related stuff
/**
 *
 * @param {partner {} from redux store via props} partner
 * called by PartnerList.
 * Displays from each partner object in a row its image on the left and Title with description on the right
 */
/* function RenderPartner({ partner }) {
    if (partner) {
        return (
            <>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </>
        );
    }
    return <div />;
} */

/**
 *
 * param {partners={props.partners}} props
 * called by About component.
 * Returns media list from partners objects.
 * or Loading or Error message
 */
// const PartnerList = props => {
  // variable partners is a map of each partner object returned from RenderPartner component
/*   const partners = props.partners.partners.map(partner => {
    return (
      <Fade key={partner.id}>
        <Media tag="li">
          <RenderPartner partner={partner} />
        </Media>
      </Fade>
    );
  }); */
  // displays if true.
/*   if (props.partners.isLoading) {
    return <Loading />;
  } */
  // displays if errMess is not null
/*   if (props.partners.errMess) {
    return (
      <div className="col">
        <h4>{props.partners.errMess}</h4>;
      </div>
    );
  } */
  // variable partners is returned in a media list, if previous 2 if statements don't return.
/*   return (
    <div className="col mt-4">
      <Media list>
        <Stagger in>{partners}</Stagger>
      </Media>
    </div>
  );
}; */

export default About;