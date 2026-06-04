"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    companyName: "",
    mobileNo: "",
    regOfficeAddress: "",
    factoryAddress: "",
    companyFormation: "",
    businessCategory: "",
    yearOfFormation: "",
    yearOfBusiness: "",
    turnoverLastYear: "",
    turnoverCurrentYear: "",
    existingBanker: "",
    existingLoan: "",
    loanType: "",
    sanctionedAmount: "",
    outstandingAmount: "",
    existingLoanCollateral: "",
    securityType: "",
    marketValue: "",
    natureOfBusiness: "",
    typeOfActivity: "",
    experienceOfPromoters: "",
    fundingRequirement: "",
    facilityRequested: "",
    purposeOfLoan: "",
    // facilityRequested: "",
    collateralAvailable: "",
    collateralType: "",
    propertyValue: "",
    clientConcern: "",
    managementRemarks: "",
  });

  const [loading, setLoading] = useState(false);

  // handleSubmit Function

  const handleSubmit = async () => {
    if (!/^[0-9]{10}$/.test(formData.mobileNo)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    if (
      !formData.companyName ||
      !formData.mobileNo ||
      !formData.regOfficeAddress ||
      !formData.factoryAddress ||
      !formData.companyFormation ||
      !formData.businessCategory ||
      !formData.natureOfBusiness ||
      !formData.typeOfActivity ||
      !formData.experienceOfPromoters ||
      !formData.fundingRequirement ||
      !formData.facilityRequested ||
      !formData.purposeOfLoan
    ) {
      alert("Please fill all required fields");
      return;
    }
    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbw5bJRSeH7syiGjCW74zj82U4stD4SLEmPm4fjUchWVueTHf6wFCMRT9wG8e8q08LVVfw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        },
      );

      alert("Form Submitted Successfully ✅");

      setFormData({
        companyName: "",
        mobileNo: "",
        regOfficeAddress: "",
        factoryAddress: "",
        companyFormation: "",
        businessCategory: "",
        yearOfFormation: "",
        yearOfBusiness: "",
        turnoverLastYear: "",
        turnoverCurrentYear: "",
        existingBanker: "",
        existingLoan: "",
        loanType: "",
        sanctionedAmount: "",
        outstandingAmount: "",
        existingLoanCollateral: "",
        securityType: "",
        marketValue: "",
        natureOfBusiness: "",
        typeOfActivity: "",
        experienceOfPromoters: "",
        fundingRequirement: "",
        facilityRequested: "",
        purposeOfLoan: "",
        collateralAvailable: "",
        collateralType: "",
        propertyValue: "",
        clientConcern: "",
        managementRemarks: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Loan Request Form
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="block font-medium mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  companyName: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-medium mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobileNo: e.target.value,
                })
              }
              maxLength={10}
              pattern="[0-9]{10}"
              required
              placeholder="Enter 10 Digit Mobile Number"
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>

        {/* Registered Office Address */}
        <div className="mt-6">
          <label className="block font-medium mb-2">
            Registered Office Address <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={3}
            placeholder="Enter Registered Office Address"
            value={formData.regOfficeAddress}
            onChange={(e) =>
              setFormData({
                ...formData,
                regOfficeAddress: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Factory Address */}
        <div className="mt-6">
          <label className="block font-medium mb-2">
            Factory Address <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={3}
            placeholder="Enter Factory Address"
            value={formData.factoryAddress}
            onChange={(e) =>
              setFormData({
                ...formData,
                factoryAddress: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Company Formation */}
        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            Company Formation <span className="text-red-500">*</span>
          </label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="companyFormation"
                value="Proprietorship Firm"
                checked={formData.companyFormation === "Proprietorship Firm"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyFormation: e.target.value,
                  })
                }
              />
              <span>Proprietorship Firm</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="companyFormation"
                value="Partnership Firm"
                checked={formData.companyFormation === "Partnership Firm"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyFormation: e.target.value,
                  })
                }
              />
              <span>Partnership Firm</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="companyFormation"
                value="Private Limited"
                checked={formData.companyFormation === "Private Limited"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyFormation: e.target.value,
                  })
                }
              />
              <span>Private Limited</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="companyFormation"
                value="LLP"
                checked={formData.companyFormation === "LLP"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyFormation: e.target.value,
                  })
                }
              />
              <span>LLP</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="companyFormation"
                value="Others"
                checked={formData.companyFormation === "Others"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyFormation: e.target.value,
                  })
                }
              />
              <span>Others</span>
            </label>
          </div>
        </div>

        {/* Business Category */}
        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            Business Category <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="businessCategory"
                value="New"
                checked={formData.businessCategory === "New"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessCategory: e.target.value,
                  })
                }
              />
              <span>New</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="businessCategory"
                value="Existing"
                checked={formData.businessCategory === "Existing"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessCategory: e.target.value,
                  })
                }
              />
              <span>Existing</span>
            </label>
          </div>
        </div>

        {/* if new */}
        {formData.businessCategory === "New" && (
          <div className="mt-6">
            <label className="block font-medium mb-2">Year Of Formation</label>

            <input
              type="text"
              value={formData.yearOfFormation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  yearOfFormation: e.target.value,
                })
              }
              placeholder="Enter Year Of Formation"
              className="w-full border rounded-lg p-3"
            />
          </div>
        )}

        {/* if existing */}

        {formData.businessCategory === "Existing" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-2">Year Of Business</label>
              <input
                type="text"
                value={formData.yearOfBusiness}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    yearOfBusiness: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Turnover Last Year
              </label>
              <input
                type="text"
                value={formData.turnoverLastYear}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    turnoverLastYear: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Turnover Current Year
              </label>
              <input
                type="text"
                value={formData.turnoverCurrentYear}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    turnoverCurrentYear: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Existing Banker</label>
              <input
                type="text"
                value={formData.existingBanker}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    existingBanker: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        )}

        {/* Existing Loan */}
        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            Existing Loan <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="existingLoan"
                value="No"
                checked={formData.existingLoan === "No"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    existingLoan: e.target.value,
                  })
                }
              />
              <span>No</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="existingLoan"
                value="Yes"
                checked={formData.existingLoan === "Yes"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    existingLoan: e.target.value,
                  })
                }
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* Conditional Fields (Only if Yes) */}

        {formData.existingLoan === "Yes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block font-medium mb-2">Type Of Loan</label>
              <input
                type="text"
                value={formData.loanType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    loanType: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Sanctioned Amount
              </label>
              <input
                type="text"
                value={formData.sanctionedAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sanctionedAmount: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Outstanding Amount
              </label>
              <input
                type="text"
                value={formData.outstandingAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    outstandingAmount: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        )}

        {/* Existing Loan Collateral */}
        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            Existing Loan Collateral Available{" "}
            <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="existingLoanCollateral"
                value="No"
                checked={formData.existingLoanCollateral === "No"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    existingLoanCollateral: e.target.value,
                  })
                }
              />
              <span>No</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="existingLoanCollateral"
                value="Yes"
                checked={formData.existingLoanCollateral === "Yes"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    existingLoanCollateral: e.target.value,
                  })
                }
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* If Yes → Show Security Details */}

        {formData.existingLoanCollateral === "Yes" && (
          <div className="mt-6">
            <label className="block font-medium mb-3">Type Of Security</label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Commercial", "Residential", "Industrial", "Plot NA"].map(
                (type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="securityType"
                      value={type}
                      checked={formData.securityType === type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          securityType: e.target.value,
                        })
                      }
                    />
                    <span>{type}</span>
                  </label>
                ),
              )}
            </div>

            <div className="mt-6">
              <label className="block font-medium mb-2">
                Approx Market Value
              </label>

              <input
                type="text"
                value={formData.marketValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    marketValue: e.target.value,
                  })
                }
                placeholder="Enter Market Value"
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        )}

        {/* Nature Of Business */}
        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            Nature Of Business <span className="text-red-500">*</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["Manufacturing", "Service", "Trading", "Other"].map(
              (business) => (
                <label key={business} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="natureOfBusiness"
                    value={business}
                    checked={formData.natureOfBusiness === business}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        natureOfBusiness: e.target.value,
                      })
                    }
                  />
                  <span>{business}</span>
                </label>
              ),
            )}
          </div>
        </div>

        {/* Type Of Activity */}

        <div className="mt-6">
          <label className="block font-medium mb-2">Type Of Activity</label>

          <textarea
            rows={3}
            value={formData.typeOfActivity}
            onChange={(e) =>
              setFormData({
                ...formData,
                typeOfActivity: e.target.value,
              })
            }
            placeholder="Describe Business Activity"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Experience Of Promoters */}

        <div className="mt-6">
          <label className="block font-medium mb-3">
            Experience Of Promoters
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["1-5 Years", "5-10 Years", "10-15 Years", "15+ Years"].map(
              (exp) => (
                <label key={exp} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="experienceOfPromoters"
                    value={exp}
                    checked={formData.experienceOfPromoters === exp}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experienceOfPromoters: e.target.value,
                      })
                    }
                  />
                  <span>{exp}</span>
                </label>
              ),
            )}
          </div>
        </div>

        {/* Funding Requirement */}

        <div className="mt-6">
          <label className="block font-medium mb-2">Funding Requirement</label>

          <input
            type="text"
            value={formData.fundingRequirement}
            onChange={(e) =>
              setFormData({
                ...formData,
                fundingRequirement: e.target.value,
              })
            }
            placeholder="Enter Funding Requirement"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Facility Requested */}

        <div className="mt-6">
          <label className="block font-medium mb-3">Facility Requested</label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Term Loan",
              "Machinery Loan",
              "CC/OD",
              "New Project Finance",
              "Others",
            ].map((facility) => (
              <label key={facility} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="facilityRequested"
                  value={facility}
                  checked={formData.facilityRequested === facility}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      facilityRequested: e.target.value,
                    })
                  }
                />
                <span>{facility}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Purpose Of Loan */}

        <div className="mt-6">
          <label className="block font-medium mb-2">Purpose Of Loan</label>

          <textarea
            rows={3}
            value={formData.purposeOfLoan}
            onChange={(e) =>
              setFormData({
                ...formData,
                purposeOfLoan: e.target.value,
              })
            }
            placeholder="Enter Purpose Of Loan"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Collateral Available */}

        <div className="mt-8">
          <label className="block font-semibold mb-4 text-lg">
            New Loan Collateral Available{" "}
            <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="collateralAvailable"
                value="No"
                checked={formData.collateralAvailable === "No"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    collateralAvailable: e.target.value,
                  })
                }
              />
              <span>No</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="collateralAvailable"
                value="Yes"
                checked={formData.collateralAvailable === "Yes"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    collateralAvailable: e.target.value,
                  })
                }
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* If Yes Show Property Details */}

        {formData.collateralAvailable === "Yes" && (
          <div className="mt-6">
            <label className="block font-medium mb-3">Type Of Property</label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Commercial", "Residential", "Industrial", "Plot NA"].map(
                (type) => (
                  <label key={type} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="collateralType"
                      value={type}
                      checked={formData.collateralType === type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          collateralType: e.target.value,
                        })
                      }
                    />
                    <span>{type}</span>
                  </label>
                ),
              )}
            </div>

            <div className="mt-6">
              <label className="block font-medium mb-2">Property Value</label>

              <input
                type="text"
                value={formData.propertyValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    propertyValue: e.target.value,
                  })
                }
                placeholder="Enter Property Value"
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
        )}

        {/* Client Concern */}

        <div className="mt-6">
          <label className="block font-medium mb-2">Client Concern</label>

          <textarea
            rows={4}
            value={formData.clientConcern}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientConcern: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Management Remarks */}

        <div className="mt-6">
          <label className="block font-medium mb-2">Management Remarks</label>

          <textarea
            rows={4}
            value={formData.managementRemarks}
            onChange={(e) =>
              setFormData({
                ...formData,
                managementRemarks: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Submit Button */}

        <div className="mt-8">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </div>
    </main>
  );
}
