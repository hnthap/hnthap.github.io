"strict";

/**
 * @typedef {{
 *  title: string;
 *  organization: string;
 *  organizationUrl: string;
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
 */

(function () {
  /** @type {SummaryItem[]} */
  const summaryItems = [
    {
      title: "Fresh Computer Science Graduate",
      organization:
        "University of Information Technology, " +
        "Vietnam National University - HCMC",
      organizationUrl: "https://en.uit.edu.vn/",
    },
  ];
  const emails = ["huynhnhanthap[at]gmail.com", "21521457[at]gm.uit.edu.vn"];
  const interests = [
    "deep learning",
    "natural language processing",
    "computer vision",
  ];
  /** @type {EducationItem[]} */
  const educationItems = [
    {
      school: "University of Information Technology, VNU-HCM",
      location: "Vietnam",
      degree: "Bachelor of Science in Computer Science",
      graduationDate: "Mar 2025",
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
      time: "Nov 2024",
    },
    // {
    //   title: "Google Career Certificate",
    //   subtitles: ["Google AI Essentials"],
    //   urls: [
    //     "https://www.coursera.org/account/accomplishments/verify/" +
    //       "RIEO4HGVK5C4",
    //   ],
    //   organization: "Google",
    //   time: "Sep 2024",
    // },
    {
      title: "Test of English for International Communication (TOEIC)",
      subtitles: ["Listening - Reading:&nbsp;900/990"],
      urls: [],
      organization: "ETS",
      time: "Mar 2024",
    },
  ];

  document.title = FULL_NAME;

  $("#root").append(
    PageTop(),
    Summary(summaryItems, emails, interests),
    ProjectList(),
    EducationList(educationItems),
    CertificateList(certificates)
  );

  $("#menu-item-home").addClass("current-menu-item");
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
        $("<a>").text(item.organization).attr("href", item.organizationUrl)
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
  const portrait = $("<img>");
  portrait.addClass("portrait");
  portrait.attr("src", Images.PORTRAIT);
  return portrait;
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
          .attr("href", "/projects.html")
      )
  );
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
 * @param {EducationItem} item
 * @returns {JQuery<HTMLElement>}
 */
function Education(item) {
  const table = $("<table>");
  table.addClass("experience");
  table.append(
    $("<tr>").append(
      $("<td>").addClass("left").text(item.school),
      $("<td>").addClass("right").text(item.location)
    ),
    $("<tr>").append(
      $("<td>")
        .addClass("left it")
        .append("&nbsp;&nbsp; " + item.degree),
      $("<td>").addClass("right it").append(
        // (item.graduated ? "Graduated" : "Expected Graduation Date") +
        //   ": " +
        item.graduationDate
      )
    )
  );
  return table;
}

/**
 *
 * @param {CertificateItem} certificate
 * @returns {JQuery<HTMLElement>}
 */
function Certificate(certificate) {
  const table = $("<table>");
  table.addClass("experience");
  table.append(
    $("<tr>").append(
      $("<td>").addClass("left").text(certificate.title),
      $("<td>").addClass("right").text(certificate.organization)
    ),
    $("<tr>").append(
      $("<td>")
        .addClass("left")
        .append(
          $("<span>")
            .addClass("it")
            .append(
              certificate.subtitles.map((s) => "&nbsp;&nbsp; " + s).join("<br>")
            ),
          certificate.urls.length !== 0
            ? CertificateVerify(certificate.urls)
            : ""
        ),
      $("<td>").addClass("right it").text(certificate.time)
    )
  );
  return table;
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
