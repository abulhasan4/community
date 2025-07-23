import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation and Tutorials',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Learn about how to run models on AIU devices using PyTorch and Hugging Face Transformers.
      </>
    ),
  },
  {
    title: 'AIU Laboratory',
    Svg: require('@site/static/img/laboratory.svg').default,
    description: (
      <>
        Learn to use the SDK APIs to download, serve and run supported AIU models. 
        Use the integrated prompt toolkit to "chat" with your NLP models.
      </>
    ),
  },
  {
    title: 'Model Benchmarking',
    Svg: require('@site/static/img/benchmark-logo.svg').default,
    description: (
      <>
        Examine various benchmarking results for supported AIU models.  Laern how to run
        your own benchmarks and produce graphical results.
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
