import { useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import type { ReactSketchCanvasRef } from 'react-sketch-canvas';

interface DrawCanvasProps {
  letter: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  watermarkOpacity?: number;
}

export function DrawCanvas({
  letter,
  width = 600,
  height = 400,
  strokeWidth = 3,
  strokeColor = '#000000',
  watermarkOpacity = 0.15,
}: DrawCanvasProps) {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width, height });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateCanvasSize = () => {
      const containerWidth = container.clientWidth;
      const nextWidth = Math.min(containerWidth, width);
      const nextHeight = Math.round((nextWidth * height) / width);

      setCanvasSize({
        width: Math.max(220, nextWidth),
        height: Math.max(180, nextHeight),
      });
    };

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [height, width]);

  const handleClear = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleRedo = () => {
    canvasRef.current?.redo();
  };

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const image = await (canvas as any).getSketchAsBlob();
        if (image) {
          const url = URL.createObjectURL(image);
          const link = document.createElement('a');
          link.href = url;
          link.download = `drawing-${letter}-${Date.now()}.png`;
          link.click();
          URL.revokeObjectURL(url);
        }
      } catch (error) {
        console.error('Error descargando dibujo:', error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4" ref={containerRef}>
      <div
        className="relative mx-auto w-full max-w-full border-4 border-gray-300 rounded-lg overflow-hidden bg-white"
        style={{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }}
      >
        {/* Marca de agua - letra en la esquina */}
        <div
          className="absolute top-4 right-4 text-gray-300 pointer-events-none z-0"
          style={{ opacity: watermarkOpacity }}
        >
          <div
            className="font-bold leading-none"
            style={{ fontSize: `${Math.max(48, Math.round(canvasSize.width * 0.2))}px` }}
          >
            {letter}
          </div>
        </div>

        {/* Canvas para dibujar */}
        <div className="relative z-10">
          <ReactSketchCanvas
            ref={canvasRef}
            width={`${canvasSize.width}px`}
            height={`${canvasSize.height}px`}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            canvasColor="white"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Controles */}
      <div className="sticky bottom-16 z-20 mx-auto w-full rounded-xl border border-blue-100 bg-white/95 p-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={handleUndo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ↶ Deshacer
        </button>

        <button
          onClick={handleRedo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ↷ Rehacer
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          🗑️ Limpiar
        </button>

        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          ⬇️ Descargar
        </button>
        </div>
      </div>
    </div>
  );
}
