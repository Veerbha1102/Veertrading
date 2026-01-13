"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                setShowOverlay(false);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setShowOverlay(true);
    };

    return (
        <div className="relative w-full aspect-video bg-card-bg rounded-lg overflow-hidden group">
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={poster}
                onEnded={handleVideoEnd}
                onClick={togglePlay}
                controls={isPlaying}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {showOverlay && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                    onClick={togglePlay}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30"
                    >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                    </motion.button>
                </motion.div>
            )}

            {/* Controls Bar (shown on hover when playing) */}
            {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={togglePlay}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 text-white" />
                            ) : (
                                <Play className="w-6 h-6 text-white" />
                            )}
                        </button>
                        <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            {isMuted ? (
                                <VolumeX className="w-6 h-6 text-white" />
                            ) : (
                                <Volume2 className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
