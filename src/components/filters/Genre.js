"use client";
import React, { useState } from "react";

const Genre = ({ genre, type, setType }) => {
  console.log(type);
  return (
    <div>
      Genre
      {genre && (
        <div className="m-2 bg-gray-200 rounded grid grid-cols-5 grid-rows-3 w-[500px]">
          <button
            onClick={() => {
              setType((prev) => (prev = "Biography"));
            }}
          >
            Biography
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Children"));
            }}
          >
            Children's
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Classic"));
            }}
          >
            Classics
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Crime"));
            }}
          >
            Crime
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Fantasy"));
            }}
          >
            Fantasy
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Fiction"));
            }}
          >
            Fiction
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "History"));
            }}
          >
            History
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Horror"));
            }}
          >
            Horror
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Non-Fiction"));
            }}
          >
            Non-Fiction
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Philosophy"));
            }}
          >
            Philosophy
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Poetry"));
            }}
          >
            Poetry
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Psychology"));
            }}
          >
            Psychology
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Romance"));
            }}
          >
            Romance
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Science"));
            }}
          >
            Science
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Self-help"));
            }}
          >
            Self-help
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Sports"));
            }}
          >
            Sports
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Suspense"));
            }}
          >
            Suspense
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Thriller"));
            }}
          >
            Thriller
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Travel"));
            }}
          >
            Travel
          </button>
          <button
            onClick={() => {
              setType((prev) => (prev = "Young Adult"));
            }}
          >
            Young Adult
          </button>
        </div>
      )}
    </div>
  );
};

export default Genre;
