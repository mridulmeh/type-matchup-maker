import React from "react";
import { Card, CardContent, CardHeader } from "../common/card";
import "./game-area.css";

export const GameArea: React.FC = () => {
  return (
    <div className="gameAreaContainer">
      <Card>
        <CardHeader>Header</CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    </div>
  );
};
