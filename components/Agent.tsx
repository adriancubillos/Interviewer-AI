'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

const Agent = ({ userName }: AgentProps) => {
  const [callStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const isSpeaking = true;
  const messages = ['Whats your name', 'My name is JMP, nice to meet you.'];

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              className="object-cover"
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
            />

            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              className="rounded-full object-cover size-[140px]"
              src="/user-avatar2.png"
              alt="user"
              width={540}
              height={540}
            />

            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== 'ACTIVE' ?
          <button className="relative btn-call">
            <span
              className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden')}
            />
            <span>{callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '...'}</span>
          </button>
        : <button className="btn-disconnect">End</button>}
      </div>
    </>
  );
};

export default Agent;
