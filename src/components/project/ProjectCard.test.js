import React from "react";
import {getByTitle, render} from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe("props test",()=>{
    it("render the props value correctly",()=>{
        const {getByTitle}=render(<ProjectCard title="test-title" content="test-content"/>);
        expect(getByTitle("title").innerHTML).toBe("test-title");
        expect(getByTitle("content").innerHTML).toBe("test-content");
    
    });
});

