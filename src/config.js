export default {
    STRIPE_KEY: "pk_test_51GyNpDF8K8uNS43sqspvhQK4BwqwY6PPbh943I9hxb2tAAVKGvynnHHfnasYxoyyfolN6In1ceSrzGAJShJLmHER00023pnqxV",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-cawan"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://hyu8auawi3.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_VFNdF67OS",
      APP_CLIENT_ID: "4jpt2uai8g6u8htruk70eretbt",
      IDENTITY_POOL_ID: "us-east-1:d5075f8b-e77f-4955-b5ec-1b554a174916"
    }
  };