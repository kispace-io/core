# Object detection in-browser: model size and memory

## Which model is used

The media viewer "Detect objects" button and the YOLO-style object detection command use **OBJECT_DETECTION_YOLOV9**, which points to **Xenova/yolos-tiny** (YOLOS-tiny, a Vision Transformer–based detector). The quantized ONNX model file is on the order of **~30–50 MB** download.

## Why RAM can exceed 1 GB

The **model file size** (download) is not the same as **runtime memory**. In the browser, object detection often uses **1 GB+ RAM** because of:

1. **ONNX Runtime Web (WASM)**  
   The runtime pre-allocates a large WebAssembly heap (often hundreds of MB up to ~2 GB) so that inference does not need to grow memory during the run. This shows up as process memory.

2. **Activation memory**  
   Vision Transformer (ViT)–based models like YOLOS-tiny compute attention over many patches. Intermediate activations for a single forward pass can use hundreds of MB.

3. **Preprocessing and buffers**  
   Image resizing, normalization, and tensor buffers add more temporary memory.

So total process memory = **runtime heap + model weights in memory + activations + buffers**, which can easily reach or exceed 1 GB even for a “tiny” model.

## Options to reduce memory

- **Use DETR instead of YOLOS for object detection**  
  Switch the media viewer (and/or commands) to **MLModel.OBJECT_DETECTION** (`Xenova/detr-resnet-50`). DETR is CNN+Transformer; in practice it can use less peak memory than YOLOS in some setups. Try it and compare in Task Manager / devtools.

- **Load detection only when needed**  
  The pipeline is cached after first use. If the user never clicks “Detect objects”, the model is not loaded. Once loaded, it stays in memory until the session ends.

- **Avoid keeping multiple object-detection models loaded**  
  Use a single default (e.g. either DETR or YOLOS-tiny), not both at once, to avoid doubling model + runtime memory.

## References

- ONNX Runtime Web: [large models and memory](https://onnxruntime.ai/docs/tutorials/web/large-models.html) (heap limits, quantization).
- Transformers.js uses ONNX Runtime Web (WASM/WebGPU) and supports `quantized: true` and dtype options to reduce size and memory.
