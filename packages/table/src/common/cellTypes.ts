/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface CellCoordinates {
    col: number;
    row: number;
}

export interface FocusedCellCoordinates extends CellCoordinates {
    focusSelectionIndex: number;
}

export enum FocusMode {
    CELL = "cell",
    ROW = "row",
}

export interface FocusedCell extends FocusedCellCoordinates {
    type: FocusMode.CELL;
}

export interface FocusedRow {
    type: FocusMode.ROW;
    row: number;
    focusSelectionIndex: number;
}

export type FocusedRegion = FocusedCell | FocusedRow;
