import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Distributed Systems',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Designing and building scalable, resilient distributed systems. 
        Expert in microservices architecture, event-driven patterns, and fault-tolerant design.
      </>
    ),
  },
  {
    title: 'Enterprise Integrations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Building seamless integrations for Salesforce, Zendesk, Dynamics 365, and ServiceNow. 
        Leading end-to-end integration projects with high availability and SLA compliance.
      </>
    ),
  },
  {
    title: 'Cloud & DevOps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Deploying on AWS with Kubernetes/Docker, implementing CI/CD pipelines, 
        and ensuring comprehensive observability and monitoring for production systems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
