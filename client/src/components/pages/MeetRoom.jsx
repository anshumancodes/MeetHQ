import React, { useState, useEffect } from 'react';
import { useSocket } from "../../context/SocketProvider";
import { useCallback } from 'react';
import ReactPlayer from 'react-player';
import peer from '../../services/peer';

function MeetRoom() {
  const socket = useSocket();
  const [remotesocketid, setRemotesocketid] = useState('');
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const [stream, setStream] = useState(null);

  const handleUserJoin = useCallback((meetId) => {
    console.log("user connected ->", meetId.email);
    setRemotesocketid(meetId.email);
  }, []);

  const handleCall = useCallback(async () => {
    try {
      const callStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(callStream);
    } catch (error) {
      setError(true);
      setErrorInfo(error);
    }
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remotesocketid, offer });
  }, [remotesocketid, socket]);

  const handleIncomingCall = useCallback(async ({ from, offer }) => {
    setRemotesocketid(from);
    const callStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setStream(callStream);

    if (!callStream) {
      setError(true);
      setErrorInfo(error);
    }
    console.log("incoming call ", from, offer);
    const ans = await peer.getAnswer(offer);
    socket.emit("call:accepted", { to: from, ans });
  }, [socket]);

  const handleCallAccept = useCallback(async ({ from, ans }) => {
    peer.setLocalDescription(ans);
    console.log("call accepted");
    sendStreams();
  }, []);

  const sendStreams = useCallback(() => {
    for (const track of stream.getTracks()) {
      peer.peer.addTrack(track, stream);
    }
  }, [stream]);

  useEffect(() => {
    socket.on("user:joined", handleUserJoin);
    socket.on("incomming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccept);

    return () => {
      socket.off("user:joined",handleUserJoin);
      socket.off("incomming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccept);
    }
  }, []);

  return (
    <div>
      {error ? (
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
          <p class="font-bold">Error occurred while connecting call!</p>
          <p class="text-sm">{errorInfo}</p>
        </div>
      ) : null}

      <h1 className='text-white'>MeetRoom</h1>
      <div className='text-white font-bold text-2xl'>{remotesocketid ? remotesocketid : "no one in the meeting"}</div>
      <h3 className='text-white text-xl'>{remotesocketid + "'s video"}</h3>
      {stream && <ReactPlayer height={400} width={400} playing={true} url={stream} className="bg-white" />}

      <div>
        {remotesocketid ? (
          <button className='bg-gray-300 text-2xl' onClick={handleCall}>
            Start Meeting
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default MeetRoom;
