"use strict";

/**
 * @typedef {{
 *  title: string;
 *  organization: string | null;
 *  organizationUrl: string | null;
 * }} SummaryItem
 *
 * @typedef {{
 *  title: string;
 *  subtitles: string[];
 *  urls: string[];
 *  organization: string;
 *  time: string;
 * }} CertificateItem
 *
 * @typedef {{
 *  school: string;
 *  location: string;
 *  degree: string;
 *  graduationDate: string;
 *  graduated: boolean;
 * }} EducationItem
 *
 * @typedef {{
 *  role: string;
 *  organization: string;
 *  location: string;
 *  time: string;
 *  bullets: string[];
 * }} ExperienceItem
 *
 * `bullets` is deliberately not rendered. This is a portfolio, not a resume:
 * the Experience section states where the time went and leaves the evidence to
 * the projects page, matching how Projects and Education are handled. The text
 * is kept here because it is the CV's wording and the two should not drift.
 */

(function () {
  /** @type {SummaryItem[]} */
  const summaryItems = [
    {
      title: "DevOps / Site Reliability Engineer",
      organization: "FPT Software",
      organizationUrl: null,
    },
  ];
  const emails = ["huynhnhanthap[at]gmail.com"];
  const interests = [
    "Vietnamese NLP",
    "Astronomical algorithms",
    "Language learning",
  ];
  /** @type {ExperienceItem[]} */
  const experienceItems = [
    {
      role: "AI Engineer Intern",
      organization: "DFM-Engineering",
      location: "HCMC, Vietnam",
      time: "Sep 2025 - Dec 2025",
      bullets: [
        "Rebuilt the core logic of an inherited computer vision pipeline, cutting " +
          "coordinate error from around 30cm to under 2cm and removing an unused " +
          "model that had been slowing every run.",
        "Improved an object detection model for engineering drawings, roughly " +
          "halving the error rate on its weakest class through annotation " +
          "correction and a custom augmentation pipeline.",
      ],
    },
  ];
  /** @type {EducationItem[]} */
  const educationItems = [
    {
      school: "University of Information Technology, VNU-HCM",
      location: "Vietnam",
      degree: "Bachelor of Science in Computer Science",
      graduationDate: "2025",
      graduated: true,
    },
  ];
  /** @type {CertificateItem[]} */
  const certificates = [
    {
      title: "NVIDIA Certificate",
      subtitles: ["Applications of AI for Anomaly Detection"],
      urls: ["https://learn.nvidia.com/certificates?id=vLgidM8gQNKIcff_r83tCw"],
      organization: "NVIDIA",
      time: "2024",
    },
    {
      title: "Google Career Certificate",
      subtitles: ["Google AI Essentials"],
      urls: [
        "https://www.coursera.org/account/accomplishments/verify/RIEO4HGVK5C4",
      ],
      organization: "Google",
      time: "2024",
    },
    {
      title: "Test of English for International Communication (TOEIC)",
      subtitles: ["Listening - Reading:&nbsp;900/990"],
      urls: [],
      organization: "ETS",
      time: "2024",
    },
  ];
  const pageTitle = `${FULL_NAME} — ${summaryItems[0].title}`;

  document.title = pageTitle;

  $("#root").append(
    PageTop(),
    Summary(summaryItems, emails, interests),
    ExperienceList(experienceItems),
    ProjectList(),
    EducationList(educationItems),
    CertificateList(certificates)
  );

  markActiveMenuItem("Home");
})();

/**
 * @param {SummaryItem[]} itemList
 * @param {string[]} emails
 * @param {string[]} interests
 * @returns {JQuery<HTMLElement>}
 */
function Summary(itemList, emails, interests) {
  const content = $("<div>");
  content.addClass("content");
  content.append(
    $("<p>").append(
      $("<strong>").text(FULL_NAME).addClass("full-name"),
      " &nbsp; [&nbsp;",
      $("<a>").text("GitHub").attr("href", Accounts.GITHUB),
      " | ",
      $("<a>").text("LinkedIn").attr("href", Accounts.LINKED_IN),
      "&nbsp;]"
    ),
    ...itemList.map((item) =>
      $("<p>").append(
        $("<strong>").text(item.title),
        $("<br>"),
        item.organization
          ? (item.organizationUrl
            ? $("<a>").text(item.organization).attr("href", item.organizationUrl)
            : $("<span>").text(item.organization))
          : ""
      )
    ),
    $("<p>").append(
      $("<span>").addClass("it").append("Email:&nbsp;"),
      emails.join(" &nbsp;or&nbsp; ")
    ),
    $("<p>").append(
      $("<span>").addClass("it").append("Interests:&nbsp;"),
      interests.join(", ") + "."
    )
  );
  const summary = $("<div>");
  summary.addClass("summary");
  summary.append(Portrait(), content);
  return summary;
}

function Portrait() {
  return $("<img>")
    .addClass("portrait")
    .attr("src", Images.PORTRAIT)
    .attr("alt", "Profile Image");
}

function ProjectList() {
  const span = $("<span>");
  span.append(
    Section("Projects"),
    $("<p>")
      .addClass("experience")
      .append(
        $("<span>").append("&nbsp;&nbsp; See more: "),
        $("<a>")
          .addClass("it")
          .text("My Projects")
          .attr("href", "./projects.html")
      )
  );
  return span;
}

/**
 *
 * @param {ExperienceItem[]} experienceItems
 * @returns {JQuery<HTMLElement>}
 */
function ExperienceList(experienceItems) {
  const span = $("<span>");
  span.append(Section("Experience"), ...experienceItems.map(Experience));
  return span;
}

/**
 *
 * @param {EducationItem[]} educationItems
 * @returns {JQuery<HTMLElement>}
 */
function EducationList(educationItems) {
  const span = $("<span>");
  span.append(Section("Education"), ...educationItems.map(Education));
  return span;
}

/**
 *
 * @param {CertificateItem[]} certificates
 * @returns {JQuery<HTMLElement>}
 */
function CertificateList(certificates) {
  const span = $("<span>");
  span.append(Section("Certificates"), ...certificates.map(Certificate));
  return span;
}

/**
 *
 * @param {ExperienceItem} item
 * @returns {JQuery<HTMLElement>}
 */
function Experience(item) {
  return $("<div>")
    .addClass("entry")
    .append(
      EntryLine(
        $("<span>").addClass("entry-primary-strong").text(item.role),
        $("<span>").text(item.location)
      ),
      EntryLine(
        $("<span>").addClass("it entry-sub").text(item.organization),
        $("<span>").addClass("it").text(item.time)
      )
    );
}

/**
 * A single row of an entry: primary text on the left, meta text on the right.
 *
 * @param {JQuery<HTMLElement>} primary
 * @param {JQuery<HTMLElement>} meta
 * @returns {JQuery<HTMLElement>}
 */
function EntryLine(primary, meta) {
  return $("<div>")
    .addClass("entry-line")
    .append(
      $("<span>").addClass("entry-primary").append(primary),
      $("<span>").addClass("entry-meta").append(meta)
    );
}

/**
 *
 * @param {EducationItem} item
 * @returns {JQuery<HTMLElement>}
 */
function Education(item) {
  return $("<div>")
    .addClass("entry")
    .append(
      EntryLine(
        $("<span>").addClass("entry-primary-strong").text(item.school),
        $("<span>").text(item.location)
      ),
      EntryLine(
        $("<span>").addClass("it entry-sub").text(item.degree),
        $("<span>").addClass("it").text(
          // (item.graduated ? "Graduated" : "Expected Graduation Date") +
          //   ": " +
          item.graduationDate
        )
      )
    );
}

/**
 *
 * @param {CertificateItem} certificate
 * @returns {JQuery<HTMLElement>}
 */
function Certificate(certificate) {
  return $("<div>")
    .addClass("entry")
    .append(
      EntryLine(
        $("<span>").addClass("entry-primary-strong").text(certificate.title),
        $("<span>").text(certificate.organization)
      ),
      EntryLine(
        $("<span>")
          .addClass("entry-sub")
          .append(
            $("<span>").addClass("it").html(certificate.subtitles.join("<br>")),
            certificate.urls.length !== 0
              ? CertificateVerify(certificate.urls)
              : ""
          ),
        $("<span>").addClass("it").text(certificate.time)
      )
    );
}

/**
 * @param {string[]} urls
 */
function CertificateVerify(urls) {
  const span = $("<span>");
  span.append(
    " &nbsp; [&nbsp;",
    ...urls.map((url) => $("<a>").text("verify").attr("href", url)),
    "&nbsp;]"
  );
  return span;
}
