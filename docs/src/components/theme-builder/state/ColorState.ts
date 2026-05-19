import type { ControlPoint } from '../types';

type Listener = (points: readonly ControlPoint[]) => void;

export class ColorState {
  private listeners: Listener[] = [];
  private controlPoints: readonly ControlPoint[];
  private readonly initialControlPoints: readonly ControlPoint[];

  constructor(initialPoints: readonly ControlPoint[]) {
    this.initialControlPoints = initialPoints;
    this.controlPoints = structuredClone(this.initialControlPoints);
  }

  public subscribe(listener: Listener): void {
    this.listeners.push(listener);
    listener(this.controlPoints);
  }

  public getPoints(): readonly ControlPoint[] {
    return this.controlPoints;
  }

  public updatePoints(newPoints: ControlPoint[]): void {
    this.controlPoints = newPoints;
    this.notify();
  }

  public reset(): void {
    this.controlPoints = structuredClone(this.initialControlPoints);
    this.notify();
  }

  private notify(): void {
    const pointsCopy = structuredClone(this.controlPoints);
    for (const listener of this.listeners) {
      listener(pointsCopy);
    }
  }
}
