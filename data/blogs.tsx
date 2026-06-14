import type React from "react";

export interface BlogPost {
  title: string;
  date: string;
  isoDate: string;
  readingTime: string;
  description: string;
  content: React.ReactNode;
  tags: string[];
  slug: string;
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}

export const blogPosts: BlogPost[] = [
  {
    title: "AI features should feel useful, not magical",
    date: "Jun 2026",
    isoDate: "2026-06-10",
    readingTime: "5 min read",
    description:
      "What I learned building AI product flows where the model is only one part of the system.",
    tags: ["AI Products", "Product Engineering", "UX"],
    slug: "ai-features-should-feel-useful",
    content: (
      <>
        <p>
          The worst AI products usually make the same mistake: they treat the
          model as the product.
        </p>

        <p>
          I think that is why a lot of AI apps feel like slop. The interface is
          just a text box, the output is too long, and the user has to do the
          real work of figuring out whether the result is useful.
        </p>

        <p>
          When I build AI features now, I try to avoid that. The model should
          not be the whole experience. It should be one step inside a clear
          product flow.
        </p>

        <h2>The product should own the shape</h2>

        <p>
          A good AI feature starts with a strict shape. In Logly, the user does
          not need a paragraph about their meal. They need calories, macros,
          food items, serving sizes and a confidence level. In SpeakSure, the
          user does not need a motivational essay. They need feedback, a score,
          a better answer and one thing to improve next.
        </p>

        <p>
          That means the app should decide the structure before the model ever
          responds.
        </p>

        <CodeBlock>{`type MealResult = {
  foods: {
    name: string;
    quantity: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }[];
  totalCalories: number;
  confidence: "low" | "medium" | "high";
};`}</CodeBlock>

        <p>
          The more structured the output, the less the user has to interpret.
          That is the difference between a feature and a chatbot.
        </p>

        <h2>AI should remove friction</h2>

        <p>
          The best use case for AI is not always “generate something from
          nothing.” A lot of the time, it is better at cleaning messy input.
        </p>

        <p>Examples:</p>

        <ul>
          <li>turning a rough food note into macros</li>
          <li>turning a spoken answer into feedback</li>
          <li>turning a messy recipe screenshot into ingredients and steps</li>
          <li>
            turning a client’s unclear request into a usable project brief
          </li>
        </ul>

        <p>
          Those flows are easier to trust because the user already brought the
          context. The model is not inventing the whole thing. It is organizing
          it.
        </p>

        <h2>The interface matters more than the prompt</h2>

        <p>
          Prompt quality matters, but the real product quality comes from what
          happens around the prompt:
        </p>

        <ul>
          <li>input constraints</li>
          <li>schema validation</li>
          <li>fallback states</li>
          <li>loading states that explain what is happening</li>
          <li>editable results</li>
          <li>clear confidence and uncertainty</li>
        </ul>

        <p>
          If the model gives a nutrition estimate, I should label it as an
          estimate. If the model gives speaking feedback, it should be concrete
          and actionable. If the model parses a recipe, the user should be able
          to edit the ingredients before saving.
        </p>

        <h2>Good AI UX is boring in the right places</h2>

        <p>
          I do not want AI features to feel like a magic trick every time. I
          want them to feel reliable. The user should understand what was
          generated, what can be edited, and what the app is confident about.
        </p>

        <p>
          That is the standard I try to use: AI should make the app faster and
          more useful, not more confusing.
        </p>
      </>
    ),
  },
  {
    title: "How I structure AI flows in React Native apps",
    date: "Jun 2026",
    isoDate: "2026-06-08",
    readingTime: "6 min read",
    description:
      "A practical pattern I use for AI mobile apps: capture input, process it safely, show editable results, then save structured data.",
    tags: ["React Native", "AI", "Mobile"],
    slug: "structuring-ai-flows-react-native",
    content: (
      <>
        <p>
          Most AI mobile apps look simple from the outside, but the real work is
          in the flow. If the user taps a button and waits for a random blob of
          text, the product will feel unreliable.
        </p>

        <p>The pattern I use is straightforward:</p>

        <ol>
          <li>capture the input</li>
          <li>send it to a backend action</li>
          <li>force a structured result</li>
          <li>validate it</li>
          <li>show an editable preview</li>
          <li>save only after the user confirms</li>
        </ol>

        <h2>1. Capture the input cleanly</h2>

        <p>
          The app should know what kind of input it is receiving. A meal note, a
          voice recording and a screenshot are different flows. They should not
          all go through the same vague “generate” endpoint.
        </p>

        <CodeBlock>{`type AIInput =
  | { type: "meal_note"; text: string }
  | { type: "voice_answer"; audioUrl: string }
  | { type: "recipe_image"; imageUrl: string }
  | { type: "recipe_text"; text: string };`}</CodeBlock>

        <p>
          This makes the backend easier to reason about and gives the UI better
          loading states.
        </p>

        <h2>2. Move AI work to the backend</h2>

        <p>
          I avoid calling AI APIs directly from the mobile app. The client
          should not own API keys, prompt logic, model routing, retry behavior
          or schema validation.
        </p>

        <p>
          The mobile app should send a clean request. The backend should decide
          the model, prompt, schema, retries and fallback behavior.
        </p>

        <h2>3. Always return product data, not prose</h2>

        <p>
          If I need a meal entry, I return a meal entry. If I need feedback, I
          return feedback fields. If I need a recipe, I return ingredients,
          steps and nutrition estimates.
        </p>

        <CodeBlock>{`type SpeakingFeedback = {
  summary: string;
  scores: {
    clarity: number;
    confidence: number;
    conciseness: number;
  };
  rewrittenAnswer: string;
  nextImprovement: string;
};`}</CodeBlock>

        <p>
          This keeps the UI stable. It also means I can store the result, show
          history, build analytics and improve the product later.
        </p>

        <h2>4. Show an editable preview</h2>

        <p>This is important. The model can be good and still be wrong.</p>

        <p>
          For nutrition tracking, the user should be able to adjust quantities.
          For recipe parsing, the user should be able to edit ingredients. For
          speaking feedback, the user should see the transcript and fix it if
          transcription was wrong.
        </p>

        <p>
          The product should not pretend the model is perfect. It should make
          correction easy.
        </p>

        <h2>5. Track usage and failure states</h2>

        <p>
          AI features can become expensive fast, especially image or audio
          flows. I track:
        </p>

        <ul>
          <li>how often users run AI actions</li>
          <li>which flows fail</li>
          <li>how often users edit the result</li>
          <li>which actions lead to saving</li>
          <li>where users hit free limits</li>
        </ul>

        <p>
          That data matters more than “the AI response looked good in testing.”
          A real AI feature works when users come back and trust the result
          enough to save it.
        </p>
      </>
    ),
  },
  {
    title: "What matters when building an AI voice app",
    date: "Jun 2026",
    isoDate: "2026-06-04",
    readingTime: "5 min read",
    description:
      "Notes from building voice practice flows: recording quality, transcription, scoring, latency and feedback that users can act on.",
    tags: ["Voice AI", "React Native", "Deepgram"],
    slug: "building-ai-voice-apps",
    content: (
      <>
        <p>
          Voice AI apps look impressive in demos, but they are easy to make
          annoying in real usage.
        </p>

        <p>
          The user is speaking out loud. That already takes effort. If the app
          records badly, transcribes poorly, waits too long or gives vague
          feedback, the user will not trust it.
        </p>

        <h2>Recording is part of the UX</h2>

        <p>The recording screen should feel calm. The user needs to know:</p>

        <ul>
          <li>when recording starts</li>
          <li>how long they have been speaking</li>
          <li>whether audio is being captured</li>
          <li>what happens after they stop</li>
        </ul>

        <p>I prefer a simple state machine for this.</p>

        <CodeBlock>{`type RecordingState =
  | "idle"
  | "recording"
  | "uploading"
  | "transcribing"
  | "analyzing"
  | "complete"
  | "failed";`}</CodeBlock>

        <p>
          That gives the UI clean states instead of one vague loading spinner.
        </p>

        <h2>Transcription is not the final product</h2>

        <p>
          Transcription is only the first layer. The user does not open a
          speaking app just to see their words. They want to know how to
          improve.
        </p>

        <p>A useful feedback result should be specific:</p>

        <ul>
          <li>what was clear</li>
          <li>what sounded weak</li>
          <li>which filler words appeared</li>
          <li>whether the answer was too long</li>
          <li>how to say it better</li>
        </ul>

        <p>
          “Good answer, be more confident” is not enough. The app should show a
          stronger version of the answer and explain why it is stronger.
        </p>

        <h2>Scoring needs to be explainable</h2>

        <p>
          Scores are useful only if they map to something the user understands.
          In SpeakSure, I think about scores as categories, not decoration:
        </p>

        <ul>
          <li>clarity</li>
          <li>confidence</li>
          <li>conciseness</li>
          <li>pacing</li>
          <li>filler control</li>
        </ul>

        <p>
          A score should never be the whole feedback. It should be a quick
          summary that points to the detailed explanation.
        </p>

        <h2>Latency changes the product</h2>

        <p>
          Voice flows are sensitive to waiting time. If the analysis takes too
          long, users start doubting whether the app worked.
        </p>

        <p>A better approach is to show progress in stages:</p>

        <ol>
          <li>uploading audio</li>
          <li>transcribing answer</li>
          <li>analyzing structure</li>
          <li>building feedback</li>
        </ol>

        <p>
          This does not make the backend faster, but it makes the wait feel
          understandable.
        </p>

        <h2>The best feedback is reusable</h2>

        <p>
          The real value of a voice app is not one analysis. It is history. If
          the app can show recurring patterns, repeated filler words and
          improvements over time, the product becomes more useful than a single
          AI response.
        </p>

        <p>
          That is the difference between a voice demo and a product people can
          train with.
        </p>
      </>
    ),
  },
  {
    title: "Building niche apps is mostly positioning",
    date: "May 2026",
    isoDate: "2026-05-28",
    readingTime: "4 min read",
    description:
      "Why small markets can still work if the product has a clear promise, a reachable audience and a real habit.",
    tags: ["Startups", "Product", "Niche Apps"],
    slug: "building-niche-apps-positioning",
    content: (
      <>
        <p>
          A niche app does not win because the market is small. It wins because
          the problem is specific enough that the product can speak directly to
          the user.
        </p>

        <p>
          A generic calorie tracker has to compete with every fitness app. A
          calorie tracker that understands Balkan food has a clearer story. A
          generic speaking app is vague. A speaking app for interviews,
          leadership updates and high-pressure answers is easier to explain.
        </p>

        <h2>The product needs one sentence</h2>

        <p>
          If I cannot explain the app in one sentence, the product is probably
          not ready.
        </p>

        <ul>
          <li>Logly: write what you ate, get calories and macros.</li>
          <li>SpeakSure: practice important answers before you say them.</li>
          <li>
            Receta Ime: save recipes from anywhere and turn them into groceries.
          </li>
        </ul>

        <p>
          The sentence is not just marketing. It decides what features belong
          and what features are noise.
        </p>

        <h2>Local products need cultural context</h2>

        <p>
          Translation is not enough. A product for Albanian or Balkan users has
          to understand the actual habits: foods people eat, jobs people apply
          for, businesses people run, and the way people already solve the
          problem through Instagram, WhatsApp, Facebook or screenshots.
        </p>

        <p>
          That is usually where the opportunity is. The global app may be better
          funded, but it does not always understand the local workflow.
        </p>

        <h2>Distribution matters more than complexity</h2>

        <p>
          A simple product with a sharp audience can beat a complex product with
          weak positioning. The hard part is not always building more features.
          It is finding the exact hook that makes people think: this is for me.
        </p>

        <p>
          For small markets, I think the best validation is not asking “is this
          a good idea?” It is watching whether people use the core action more
          than once.
        </p>
      </>
    ),
  },
];
