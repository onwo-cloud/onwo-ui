import type { ControlPoint } from '../types';

export interface Dimensions {
  width: number;
  height: number;
  margin: number;
  effectiveWidth: number;
  effectiveHeight: number;
}

export class CoordinateMapper {
  constructor(
    private svg: SVGSVGElement,
    private dims: Dimensions,
    private decimalPrecision?: number,
  ) {}

  public screenToNormalized(evt: MouseEvent): { x: number; y: number } {
    const rect = this.svg.getBoundingClientRect();
    const svgX = evt.clientX - rect.left;
    const svgY = evt.clientY - rect.top;

    return {
      x: (svgX - this.dims.margin) / this.dims.effectiveWidth,
      y: 1 - (svgY - this.dims.margin) / this.dims.effectiveHeight,
    };
  }

  public normalizedToControlPointCoords(point: { x: number; y: number }): { x: number; y: number } {
    return {
      x: this.round(point.x),
      y: this.round(point.y),
    };
  }

  public normalizedToSvg(point: [number, number]): { x: number; y: number } {
    return {
      x: this.dims.margin + point[0] * this.dims.effectiveWidth,
      y: this.dims.margin + (1 - point[1]) * this.dims.effectiveHeight,
    };
  }

  private round(value: number): number {
    if (this.decimalPrecision === undefined || this.decimalPrecision < 0) {
      return value;
    }
    return Number.parseFloat(value.toFixed(this.decimalPrecision));
  }

  public normalizedToControlPoint(dp: ControlPoint): Omit<ControlPoint, 'id'> {
    return {
      point: [this.round(dp.point[0]), this.round(dp.point[1])],
      inHandle: [this.round(dp.inHandle[0]), this.round(dp.inHandle[1])],
      outHandle: [this.round(dp.outHandle[0]), this.round(dp.outHandle[1])],
    };
  }
}
