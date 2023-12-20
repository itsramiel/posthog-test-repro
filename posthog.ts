import PostHog from 'posthog-react-native';

export let posthog: PostHog | undefined;

PostHog.initAsync('<ph_project_api_key>', {
  host: 'https://app.posthog.com',
}).then(client => {
  posthog = client;
});
