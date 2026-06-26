# Physics-Informed Machine Learning — lecture thumbnails

A thumbnail template for the *Physics-Informed Machine Learning* mini lecture
series — one 16:9 image per lecture, sized for YouTube (1280×720) and the
teaching page. Uses the **lukebhan.com fonts** (Space Grotesk + JetBrains Mono).

The topic figure is the hero (full-width, top); the lecture title sits in the
navy band below, under a `Physics-Informed Machine Learning · Mini Lecture Series`
eyebrow.

## Make a thumbnail

1. **Copy the template** per lecture so you keep each one:
   ```sh
   cp lecture-thumbnail.tex neural-operators.tex
   ```
   (Or edit `lecture-thumbnail.tex` in place if you only need one at a time.)

2. **Fill in the `PER-LECTURE` block** near the top — the only part you edit:
   ```tex
   \newcommand{\lecturetitle}{Neural Operators}
   \newcommand{\lecturesub}{Learning maps between function spaces}
   \newcommand{\lecturepart}{}     % optional: e.g. Part 1  (empty = no badge)
   \newcommand{\speaker}{Luke Bhan}
   \newcommand{\lectureimage}{images/topic-neural-operators.pdf}
   ```
   Set `\lecturepart` to `Part 1` / `Part 2` for multi-part lectures and a gold
   badge appears top-right; leave it empty for none.

3. **Add a topic figure** in `images/` and point `\lectureimage` at it
   (PDF / PNG / JPG). It is letterboxed (`keepaspectratio`) into the top field,
   so any aspect ratio is safe. Leave the file missing to get a placeholder.

## Compile + export

Use **XeLaTeX** (required — the template loads the `.ttf` fonts via `fontspec`).
`remember picture` needs **two** passes; the first leaves everything at the
origin, the second places it.

```sh
xelatex neural-operators.tex
xelatex neural-operators.tex          # 2nd pass is required

# render at 2x from the vector PDF, with anti-aliasing, then snap to 2560x1440
gs -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE=png16m -r406 \
   -dTextAlphaBits=4 -dGraphicsAlphaBits=4 \
   -o neural-operators.png neural-operators.pdf
sips -z 1440 2560 neural-operators.png
```

Upload the **2560×1440** version to YouTube, not 1280×720. YouTube re-encodes
thumbnails to JPEG and serves them upscaled on many surfaces; giving it the
1280×720 minimum makes flat areas band and thin text look grainy. A sharp 1440p
source (still well under YouTube's 2 MB limit) downscales cleanly.

Or with `latexmk`:
```sh
latexmk -pdf -pdflatex=xelatex neural-operators.tex
```

## Layout / tuning

- Top: `stone` figure field — the topic figure, the hero of the thumbnail.
- A `gold` rule separates it from the navy band.
- Bottom navy band: series eyebrow (top-left), optional `Part N` badge
  (top-right), big title, subtitle, speaker.

Positions live in the single `tikzpicture`. Coordinates are `($(O)+(x,y)$)` in cm
from the page's bottom-left corner `O`. `\bandh` (default 3.5 cm) sets how tall
the navy band is — raise it for more text room, lower it to make the figure
even bigger. Colors are in the `palette` block (navy / gold / stone).

## Lecture highlight figures

`images/topic-*.tex` are hand-built TikZ figures, one per lecture, in the site
palette + fonts. Each is a `standalone` document; compiled outputs sit beside
them as `topic-*.pdf` (vector, used as `\lectureimage`) and `topic-*.png`
(300 dpi, transparent, for web use).

| Lecture | Figure |
|---|---|
| Neural ODEs | `topic-neural-odes` — discrete layers → a vector field with its integral curve, `ż = f_θ(z,t)` |
| Neural operators | `topic-neural-operators` — input function → operator `𝒢_θ` (`∫ k(x,y) v(y) dy`) → output function |
| Physics-informed NNs | `topic-pinns` — collocation domain → MLP → autodiff residual + loss |
| Foundation models | `topic-foundation-models` — diverse data → pretrained model → downstream tasks |

The vector field in the Neural ODEs figure is generated so the gold trajectory
is a true integral curve — the arrows are tangent to the flow along it.

Rebuild a figure (run from `beamer/`, so the fonts resolve):
```sh
xelatex -output-directory=images images/topic-neural-operators.tex
```
They share `images/_figpre.tex` (palette, fonts, TikZ styles) — edit that to
restyle all four at once.

## Ready-made thumbnails

`out/thumb-*.{tex,pdf,png}` — the finished thumbnails for all lectures
(Neural ODEs, Neural Operators Part 1 & Part 2, PINNs, Foundation Models).

## Assets in this folder

- `fonts/` — Space Grotesk + JetBrains Mono (400/500/700), the site fonts
  (OFL, from Google Fonts / Fontsource).
- `images/topic-*` — the four lecture highlight figures (`.tex` source +
  `.pdf` vector + `.png` raster).
