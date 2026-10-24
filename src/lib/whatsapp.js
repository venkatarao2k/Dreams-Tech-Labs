export const WA_NUMBER = '917095537106';
export const WA_DISPLAY = '+91 70955 37106';
export const EMAIL = 'hello@dreamstechlabs.in';

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_GENERAL = waLink(
  'Hi DreamsTech Labs, I need help choosing a final-year project.\n\nCourse: (B.Tech / MCA / M.Tech)\nBranch:\nTechnology I prefer:\nPreferred language: (Telugu / English / Tamil / Hindi)'
);

export const WA_OWN_IDEA = waLink(
  'Hi DreamsTech Labs, I have my own project idea / base paper.\n\nCourse: (B.Tech / MCA / M.Tech)\nIdea or paper title:\nDeadline:'
);

export const waForProject = (project) =>
  waLink(
    `Hi DreamsTech Labs, I'm interested in ${project.code}: ${project.title}. Please share the details.`
  );
