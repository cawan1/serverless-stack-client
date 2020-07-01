const dev = {
  STRIPE_KEY: "pk_test_51GyNpDF8K8uNS43sqspvhQK4BwqwY6PPbh943I9hxb2tAAVKGvynnHHfnasYxoyyfolN6In1ceSrzGAJShJLmHER00023pnqxV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-xen73mxt73uz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7x47vw0b0l.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Buyi5Ck0I",
    APP_CLIENT_ID: "3qpanc5k1cpifcisvbliu8jjcv",
    IDENTITY_POOL_ID: "us-east-1:708d071d-7572-4bb7-9e58-edab4d78be67"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51GyNpDF8K8uNS43sqspvhQK4BwqwY6PPbh943I9hxb2tAAVKGvynnHHfnasYxoyyfolN6In1ceSrzGAJShJLmHER00023pnqxV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-wv54tvwefd3y"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hh5acguk88.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xVuAPFIZi",
    APP_CLIENT_ID: "1mr73e81o8nmp5co4udt9dir1n",
    IDENTITY_POOL_ID: "us-east-1:84498d04-71b7-4440-91c5-a9ce0f529617"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};