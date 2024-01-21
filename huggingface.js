import { textGenerationStream } from "@huggingface/inference";

for await (
  const output of textGenerationStream ({
    accessToken: "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",
    model: "HuggingFaceH4/zephyr-7b-beta",
    inputs: "Hello there!",
    parameters: { max_length: 100 }
  })) {
  console.log(output.generated_text);
}
