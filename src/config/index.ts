import {
  faGithub,
  faMediumM,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import aws from '../images/aws.svg';
import azure from '../images/azure.svg';
import circleci from '../images/circleci.svg';
import docker from '../images/docker-icon.svg';

export const features = {
  nav: false,
};

export const nav = [
  { title: 'HOME', href: '!' },
  { title: 'PROJECTS', href: 'projects' },
  { title: 'ARTICLES', href: 'articles' },
  // { title: 'CODE', href: '#code' },
];

export const social = [
  { title: 'github', src: faGithub, href: '' },
  { title: 'medium', src: faMediumM, href: '' },
  { title: 'twitter', src: faTwitter, href: '' },
];

export const tech = {
  everyday: [
    { id: 'aws', src: aws },
    { id: 'azure', src: azure },
    { id: 'aws', src: aws },
    { id: 'azure', src: azure },
    { id: 'aws', src: aws },
    { id: 'azure', src: azure },
    { id: 'aws', src: aws },
    { id: 'azure', src: azure },
  ],
  sometimes: [
    { id: 'circleci', src: circleci },
    { id: 'docker', src: docker },
    { id: 'circleci', src: circleci },
    { id: 'docker', src: docker },
    { id: 'circleci', src: circleci },
    { id: 'docker', src: docker },
    { id: 'circleci', src: circleci },
    { id: 'docker', src: docker },
  ],
};
